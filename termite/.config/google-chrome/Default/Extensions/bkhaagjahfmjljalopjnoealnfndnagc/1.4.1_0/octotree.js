function Storage() {}

Storage.prototype.set = function(key, val, local, cb) {
  if (typeof local === 'function') {
    cb = local
    local = false
  }

  cb = cb || function() {}

  if (local) {
    localStorage.setItem(key, JSON.stringify(val))
    cb()
  }
  else {
    var item = {}
    item[key] = val
    chrome.storage.local.set(item, cb)
  }
}

Storage.prototype.get = function(key, local, cb) {
  if (typeof local === 'function') {
    cb = local
    local = false
  }

  cb = cb || function() {}

  if (local) cb(parse(localStorage.getItem(key)))
  else chrome.storage.local.get(key, function(item) {
    cb(item[key])
  })

  function parse(val) {
    try {
      return JSON.parse(val)
    } catch (e) {
      return val
    }
  }
}
const TEMPLATE = '<div>\n' +
    '  <nav class="octotree_sidebar">\n' +
    '    <a class="octotree_toggle button"><div class="loader"></div><span></span></a>\n' +
    '    <a class="octotree_opts"><span></span></a>\n' +
    '    <div class="octotree_views">\n' +
    '      <div class="octotree_view octotree_treeview current">\n' +
    '        <div class="octotree_view_header"></div>\n' +
    '        <div class="octotree_view_body"></div>\n' +
    '      </div>\n' +
    '      <div class="octotree_view octotree_errorview">\n' +
    '        <div class="octotree_view_header"></div>\n' +
    '        <form class="octotree_view_body">\n' +
    '          <div class="message"></div>\n' +
    '          <div>\n' +
    '            <input name="token" type="text" placeholder="Paste access token here" autocomplete="off">\n' +
    '          </div>\n' +
    '          <div>\n' +
    '            <button type="submit" class="button">Save</button>\n' +
    '            <a href="https://github.com/buunguyen/octotree#github-access-token" target="_blank" tabIndex="-1">Why is this required?</a>\n' +
    '          </div>\n' +
    '          <div class="error"></div>\n' +
    '        </form>\n' +
    '      </div>\n' +
    '      <div class="octotree_view octotree_optsview">\n' +
    '        <div class="octotree_view_header">Settings</div>\n' +
    '        <form class="octotree_view_body">\n' +
    '          <div>\n' +
    '            <div>\n' +
    '              <label>Site access token</label>\n' +
    '              <a href="https://github.com/buunguyen/octotree#github-access-token" target="_blank" tabIndex="-1">what\'s this?</a>\n' +
    '            </div>\n' +
    '            <input type="text" data-store="TOKEN" data-perhost="true">\n' +
    '          </div>\n' +
    '          <div>\n' +
    '            <div>\n' +
    '              <label>Hotkeys</label>\n' +
    '              <a href="https://github.com/madrobby/keymaster#defining-shortcuts" target="_blank" tabIndex="-1">supported keys</a>\n' +
    '            </div>\n' +
    '            <input type="text" data-store="HOTKEYS">\n' +
    '          </div>\n' +
    '          <div>\n' +
    '            <label><input type="checkbox" data-store="REMEMBER"> Show sidebar if previously shown</label>\n' +
    '          </div>\n' +
    '          <div>\n' +
    '            <label><input type="checkbox" data-store="COLLAPSE"> Collapse folders with single sub-folder</label>\n' +
    '          </div>\n' +
    '          <div>\n' +
    '            <div>\n' +
    '              <label>GitHub Enterprise URLs</label>\n' +
    '            </div>\n' +
    '            <textarea data-store="GHEURLS" placeholder="https://github.mysite1.com/                                        https://github.mysite2.com/">\n' +
    '            </textarea>\n' +
    '          </div>\n' +
    '          <div>\n' +
    '            <button type="submit" class="button">Save</button>\n' +
    '          </div>\n' +
    '        </form>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </nav>\n' +
    '  <div class="octotree_popup">\n' +
    '    <div class="arrow"></div>\n' +
    '    <div class="content">\n' +
    '      Octotree is enabled on every GitHub code page. Click this button or press\n' +
    '\n' +
    '      <kbd>cmd shift s</kbd> (or <kbd>ctrl shift s</kbd>)\n' +
    '      to show it.\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>'
const
    PREFIX = 'octotree'

  , STORE = {
    TOKEN    : 'octotree.github_access_token',
    COLLAPSE : 'octotree.collapse',
    REMEMBER : 'octotree.remember',
    HOTKEYS  : 'octotree.hotkeys',
    GHEURLS  : 'octotree.gheurls',
    WIDTH    : 'octotree.sidebar_width',
    POPUP    : 'octotree.popup_shown',
    SHOWN    : 'octotree.sidebar_shown',
  }

  , EVENT = {
    TOGGLE      : 'octotree:toggle',
    LOC_CHANGE  : 'octotree:location',
    REQ_START   : 'octotree:start',
    REQ_END     : 'octotree:end',
    OPTS_CHANGE : 'octotree:change',
    VIEW_READY  : 'octotree:ready',
    VIEW_CLOSE  : 'octotree:close',
  }
const
    GH_RESERVED_USER_NAMES = [
      'settings', 'orgs', 'organizations',
      'site', 'blog', 'about', 'explore',
      'styleguide', 'showcases', 'trending',
      'stars', 'dashboard', 'notifications',
      'search', 'developer'
    ]
  , GH_RESERVED_REPO_NAMES = ['followers', 'following', 'repositories']
  , GH_BRANCH_SEL       = '*[data-master-branch]'
  , GH_BRANCH_BTN_SEL   = '*[data-master-branch] > .js-select-button'
  , GH_404_SEL          = '#parallax_wrapper'
  , GH_PJAX_SEL         = '#js-repo-pjax-container'
  , GH_CONTAINERS       = 'body > .container, .header > .container, .site > .container, .repohead > .container'

function GitHub() {}

/**
 * Selects a submodule.
 */
GitHub.prototype.selectSubmodule = function(path) {
  window.location.href = path
}

/**
 * Selects a path.
 */
GitHub.prototype.selectPath = function(path) {
  var container = $(GH_PJAX_SEL)
  if (container.length) {
    $.pjax({
      // needs full path for pjax to work with Firefox as per cross-domain-content setting
      url : location.protocol + '//' + location.host + path,
      container : container
    })
  }
  else window.location.href = path // falls back if no container (i.e. GitHub DOM has changed or is not yet available)
}

/**
 * Updates page layout based on visibility status and width of the Octotree sidebar.
 */
GitHub.prototype.updateLayout = function(sidebarVisible, sidebarWidth) {
  var $containers = $(GH_CONTAINERS)
    , space = location.host === 'github.com' ? 10 : 0
    , autoMarginLeft
    , shouldPushLeft

  if ($containers.length === 4) {
    autoMarginLeft = ($('body').width() - $containers.width()) / 2
    shouldPushLeft = sidebarVisible && (autoMarginLeft <= sidebarWidth + space)
    $containers.css('margin-left', shouldPushLeft
      ? sidebarWidth + space
      : autoMarginLeft)
  }

  // falls-back if GitHub DOM has been updated
  else $('html').css('margin-left', sidebarVisible ? sidebarWidth - space : 0)
}

/**
 * Returns the repository information if user is at a repository URL. Returns `null` otherwise.
 */
GitHub.prototype.getRepoFromPath = function() {
  // 404 page, skip
  if ($(GH_404_SEL).length) return false

  // (username)/(reponame)[/(subpart)]
  var match = window.location.pathname.match(/([^\/]+)\/([^\/]+)(?:\/([^\/]+))?/)
  if (!match) return false

  // not a repository, skip
  if (~GH_RESERVED_USER_NAMES.indexOf(match[1])) return false
  if (~GH_RESERVED_REPO_NAMES.indexOf(match[2])) return false

  // not a code page, skip
  if (match[3] && !~['tree', 'blob'].indexOf(match[3])) return false

  // can actually check if *[data-master-branch] exists and remove all the checks above
  // but the current approach is less fragile in case of GitHub DOM changes
  var branch = $(GH_BRANCH_SEL).data('ref') || $(GH_BRANCH_BTN_SEL).text() || 'master'
  return {
    username : match[1],
    reponame : match[2],
    branch   : branch
  }
}

/**
 * Fetches data of a particular repository.
 * @param opts: { repo: repository, token (optional): user access token, apiUrl (optional): base API URL }
 * @param cb(err: error, tree: array (of arrays) of items)
 */
GitHub.prototype.fetchData = function(opts, cb) {
  var self = this
    , repo = opts.repo
    , folders = { '': [] }
    , encodedBranch = encodeURIComponent(decodeURIComponent(repo.branch))
    , $dummyDiv = $('<div/>')

  getTree(encodedBranch + '?recursive=true', function(err, tree) {
    if (err) return cb(err)

    fetchSubmodules(function(err, submodules) {
      if (err) return cb(err)
      submodules = submodules || {}

      // split work in chunks to prevent blocking UI on large repos
      nextChunk(0)
      function nextChunk(iteration) {
        var chunkSize = 300
          , baseIndex = iteration * chunkSize
          , i
          , item, path, type, index, name, moduleUrl

        for (i = 0; i < chunkSize; i++) {
          item = tree[baseIndex + i]

          // we're done
          if (item === undefined) return cb(null, folders[''])

          path  = item.path
          type  = item.type
          index = path.lastIndexOf('/')
          name  = $dummyDiv.text(path.substring(index + 1)).html() // sanitizes, closes #9

          item.id   = PREFIX + path
          item.text = name
          item.icon = type // use `type` as class name for tree node

          folders[path.substring(0, index)].push(item)

          if (type === 'tree') {
            folders[item.path] = item.children = []
            item.a_attr = { href: '#' }
          }
          else if (type === 'blob') {
            item.a_attr = { href: '/' + repo.username + '/' + repo.reponame + '/' + type + '/' + repo.branch + '/' + encodeURIComponent(path) /* closes #97 */ }
          }
          else if (type === 'commit') {
            moduleUrl = submodules[item.path]
            if (moduleUrl) { // fix #105
              // special handling for submodules hosted in GitHub
              if (~moduleUrl.indexOf('github.com')) {
                moduleUrl = moduleUrl.replace(/^git:/, window.location.protocol)
                                     .replace(/.git$/, '')
                item.text = '<a href="' + moduleUrl + '" class="jstree-anchor">' + name + '</a>' +
                            '<span>@ </span>' +
                            '<a href="' + moduleUrl + '/tree/' + item.sha + '" class="jstree-anchor">' + item.sha.substr(0, 7) + '</a>'
              }
              item.a_attr = { href: moduleUrl }
            }
          }
        }

        setTimeout(function() {
          nextChunk(iteration + 1)
        }, 0)
      }
    })

    function fetchSubmodules(cb) {
      var item = tree.filter(function(item) { return /^\.gitmodules$/i.test(item.path) })[0]
      if (!item) return cb()

      getBlob(item.sha, function(err, data) {
        if (err || !data) return cb(err)
        parseGitmodules(data, cb)
      })
    }
  })

  function getTree(tree, cb) {
   get('/git/trees/' + tree, function(err, res) {
      if (err) return cb(err)
      cb(null, res.tree)
    })
  }

  function getBlob(sha, cb) {
    get('/git/blobs/' + sha, function(err, res) {
      if (err) return cb(err)
      cb(null, atob(res.content))
    })
  }

  function get(path, cb) {
    var token = opts.token
      , host  = (location.host === 'github.com' ? 'api.github.com' : (location.host + '/api/v3'))
      , base  = location.protocol + '//' + host + '/repos/' + repo.username + '/' + repo.reponame
      , cfg   = { method: 'GET', url: base + path }

    if (token) cfg.headers = { Authorization: 'token ' + token }
    $.ajax(cfg)
      .done(function(data) {
        cb(null, data)
      })
      .fail(function(jqXHR) {
        var createTokenUrl = location.protocol + '//' + location.host + '/settings/tokens/new'
          , error
          , message
          , needAuth

        switch (jqXHR.status) {
          case 0:
            error = 'Connection error'
            message = 'Cannot connect to GitHub. If your network connection to GitHub is fine, maybe there is an outage of the GitHub API. Please try again later.'
            needAuth = false
            break
          case 401:
            error = 'Invalid token'
            message = 'The token is invalid. Follow <a href="' + createTokenUrl + '" target="_blank">this link</a> to create a new token and paste it below.'
            needAuth = true
            break
          case 409:
            error = 'Empty repository'
            message = 'This repository is empty.'
            break
          case 404:
            error = 'Private repository'
            message = 'Accessing private repositories requires a GitHub access token. Follow <a href="' + createTokenUrl + '" target="_blank">this link</a> to create one and paste it below.'
            needAuth = true
            break
          case 403:
            if (~jqXHR.getAllResponseHeaders().indexOf('X-RateLimit-Remaining: 0')) {
              error = 'API limit exceeded'
              message = 'You have exceeded the GitHub API hourly limit and need GitHub access token to make extra requests. Follow <a href="' + createTokenUrl + '" target="_blank">this link</a> to create one and paste it below.'
              needAuth = true
              break
            }
            else {
              error = 'Forbidden'
              message = 'You are not allowed to access the API. You might need to provide an access token. Follow <a href="' + createTokenUrl + '" target="_blank">this link</a> to create one and paste it below.'
              needAuth = true
              break
            }
          default:
            error = message = jqXHR.statusText
            needAuth = false
            break
        }
        cb({
          error    : 'Error: ' + error,
          message  : message,
          needAuth : needAuth,
        })
      })
  }
}
function HelpPopup($dom, store) {
  this.$view = $dom.find('.octotree_popup')
  this.store = store
}

HelpPopup.prototype.show = function() {
  var $view = this.$view
    , $sidebar = this.$sidebar
    , store = this.store

  store.get(STORE.POPUP, function(shown) {
    if (shown) return

    $view.css('display', 'block').appendTo($('body'))

    setTimeout(function() {
      store.set(STORE.POPUP, true, function() {
        $view.addClass('show').click(hide)
        setTimeout(hide, 12000)
        $(document).one(EVENT.TOGGLE, hide)
      })
    }, 500)

    function hide() {
      if ($view.hasClass('show')) {
        $view.removeClass('show').one('transitionend', function() { $view.remove() })
      }
    }
  })
}
function ErrorView($dom, store) {
  var self = this
  this.$view = $dom.find('.octotree_errorview').submit(saveToken)
  this.store = store

  function saveToken(event) {
    event.preventDefault()
    var $view = self.$view
      , $error = $view.find('.error').text('')
      , $token = $view.find('[name="token"]')
      , newToken = $token.val()

    if (!newToken) return $error.text('Token is required')

    store.get(STORE.TOKEN, true, function(oldToken) {
      store.set(STORE.TOKEN, newToken, true, function() {
        var changes = {}
        changes[STORE.TOKEN] = [oldToken, newToken]
        $(self).trigger(EVENT.OPTS_CHANGE, changes)
        $token.val('')
      })
    })
  }
}

ErrorView.prototype.show = function(err) {
  var self = this
    , $view = this.$view
    , $token = $view.find('input[name="token"]')
    , $submit = $view.find('button[type="submit"]')
    , $help = $submit.next()

  self.store.get(STORE.TOKEN, true, function(token) {
    $view.find('.octotree_view_header').html(err.error)
    $view.find('.message').html(err.message)
    if (err.needAuth) {
      $submit.show()
      $token.show()
      $help.show()
      if (token) $token.val(token)
    }
    else {
      $submit.hide()
      $token.hide()
      $help.hide()
    }
    $(self).trigger(EVENT.VIEW_READY)
  })
}
function TreeView($dom, store, adapter) {
  this.$view = $dom.find('.octotree_treeview')
  this.store = store
  this.adapter = adapter
  this.$view
    .find('.octotree_view_body')
    .on('click.jstree', '.jstree-open>a', function() {
      $.jstree.reference(this).close_node(this)
    })
    .on('click.jstree', '.jstree-closed>a', function() {
      $.jstree.reference(this).open_node(this)
    })
    .on('click', function(event) {
      var $target = $(event.target)

      // handle icon click, fix #122
      if ($target.is('i.jstree-icon')) $target = $target.parent()

      if (!$target.is('a.jstree-anchor')) return

      var href  = $target.attr('href')
        , $icon = $target.children().length
          ? $target.children(':first')
          : $target.siblings(':first') // handles child links in submodule

      if ($icon.hasClass('commit')) adapter.selectSubmodule(href)
      else if ($icon.hasClass('blob')) adapter.selectPath(href)
    })
    .jstree({
      core    : { multiple: false, themes : { responsive : false } },
      plugins : ['wholerow']
    })
}

TreeView.prototype.showHeader = function(repo) {
  var adapter = this.adapter
  this.$view.find('.octotree_view_header')
    .html(
      '<div class="octotree_header_repo">' +
         '<a href="/' + repo.username + '">' + repo.username +'</a>'  +
         ' / ' +
         '<a data-pjax href="/' + repo.username + '/' + repo.reponame + '">' + repo.reponame +'</a>' +
       '</div>' +
       '<div class="octotree_header_branch">' +
         repo.branch +
       '</div>'
    )
    .on('click', 'a[data-pjax]', function(event) {
      event.preventDefault()
      adapter.selectPath($(this).attr('href') /* a.href always return absolute URL, don't want that */)
    })
}

TreeView.prototype.show = function(repo, treeData) {
  var self = this

  self.store.get(STORE.COLLAPSE, function(collapseTree) {
    var treeContainer = self.$view.find('.octotree_view_body')
      , tree = treeContainer.jstree(true)

    treeData = sort(treeData)
    if (collapseTree) treeData = collapse(treeData)
    tree.settings.core.data = treeData

    treeContainer.one('refresh.jstree', function() {
      self.syncSelection()
      $(self).trigger(EVENT.VIEW_READY)
    })

    tree.refresh(true)
  })

  function sort(folder) {
    folder.sort(function(a, b) {
      if (a.type === b.type) return a.text === b.text ? 0 : a.text < b.text ? -1 : 1
      return a.type === 'blob' ? 1 : -1
    })
    folder.forEach(function(item) {
      if (item.type === 'tree') sort(item.children)
    })
    return folder
  }

  function collapse(folder) {
    return folder.map(function(item) {
      if (item.type === 'tree') {
        item.children = collapse(item.children)
        if (item.children.length === 1 && item.children[0].type === 'tree') {
          var onlyChild = item.children[0]
          onlyChild.text = item.text + '/' + onlyChild.text
          return onlyChild
        }
      }
      return item
    })
  }
}

TreeView.prototype.syncSelection = function() {
  var tree = this.$view.find('.octotree_view_body').jstree(true)
    , path = location.pathname

  if (!tree) return
  tree.deselect_all()

  // e.g. converts /buunguyen/octotree/type/branch/path to path
  var match = path.match(/(?:[^\/]+\/){4}(.*)/)
    , nodeId
  if (match) {
    nodeId = PREFIX + decodeURIComponent(match[1])
    tree.select_node(nodeId)
    tree.open_node(nodeId)
  }
}
function OptionsView($dom, store) {
  var self     = this
    , $view    = $dom.find('.octotree_optsview').submit(save)
    , $toggler = $dom.find('.octotree_opts').click(toggle)
    , elements = $view.find('[data-store]').toArray()

  this.$view = $view

  // hide options view when sidebar is hidden
  $(document).on(EVENT.TOGGLE, function(event, visible) {
    if (!visible) toggle(false)
  })

  function toggle(visibility) {
    if (visibility !== undefined) {
      if ($view.hasClass('current') === visibility) return
      return toggle()
    }
    if ($toggler.hasClass('selected')) {
      $toggler.removeClass('selected')
      $(self).trigger(EVENT.VIEW_CLOSE)
    }
    else {
      eachOption(
        function($elm, key, local, value, cb) {
          if ($elm.is(':checkbox')) $elm.prop('checked', value)
          else $elm.val(value)
          cb()
        },
        function() {
          $toggler.addClass('selected')
          $(self).trigger(EVENT.VIEW_READY)
        }
      )
    }
  }

  function save(event) {
    event.preventDefault()

    /*
     * Certainly not a good place to put this logic but Chrome requires
     * permissions to be requested only in response of user input. So...
     */
    var $ta  = $view.find('[data-store=GHEURLS]')
      , urls = $ta.val().split(/\n/)
    chrome.runtime.sendMessage({ type: 'requestPermissions', urls: urls }, function(granted) {
      if (granted) saveOptions()
      else {
        // permissions not granted (by user or error), reset value
        store.get(STORE.GHEURLS, function(val) {
          $ta.val(val)
          saveOptions()
        })
      }
    })
    function saveOptions() {
      var changes = {}
      eachOption(
        function($elm, key, local, value, cb) {
          var newValue = $elm.is(':checkbox') ? $elm.is(':checked') : $elm.val()
          if (value === newValue) return cb()
          changes[key] = [value, newValue]
          store.set(key, newValue, local, cb)
        },
        function() {
          toggle(false)
          if (Object.keys(changes).length) $(self).trigger(EVENT.OPTS_CHANGE, changes)
        }
      )
    }
  }

  function eachOption(processFn, completeFn) {
    parallel(elements,
      function(elm, cb) {
        var $elm  = $(elm)
          , key   = STORE[$elm.data('store')]
          , local = !!$elm.data('perhost')
        store.get(key, local, function(value) {
          processFn($elm, key, local, value, function() { cb() })
        })
      },
      completeFn
    )
  }
}
$(document).ready(function() {
  // When navigating from non-code pages (i.e. Pulls, Issues) to code page
  // GitHub doesn't reload the page but uses pjax. Need to detect and load Octotree.
  var href, hash
  function detectLocationChange() {
    if (location.href !== href || location.hash !== hash) {
      href = location.href
      hash = location.hash
      $(document).trigger(EVENT.LOC_CHANGE, href, hash)
    }
    setTimeout(detectLocationChange, 200)
  }
  detectLocationChange()
})
// regexps from https://github.com/shockie/node-iniparser
const
    INI_SECTION = /^\s*\[\s*([^\]]*)\s*\]\s*$/
  , INI_COMMENT = /^\s*;.*$/
  , INI_PARAM   = /^\s*([\w\.\-\_]+)\s*=\s*(.*?)\s*$/
  , SEPARATOR   = /\r\n|\r|\n/

function parseGitmodules(data, cb) {
  if (!data) return cb()

  var submodules = {}
    , lines = data.split(SEPARATOR)
    , lastPath

  lines.forEach(function(line) {
    var match
    if (INI_SECTION.test(line) || INI_COMMENT.test(line) || !(match = line.match(INI_PARAM))) return
    if (match[1] === 'path') lastPath = match[2]
    else if (match[1] === 'url') submodules[lastPath] = match[2]
  })

  cb(null, submodules)
}
function parallel(arr, iter, done) {
  var total = arr.length
  if (total === 0) return done()

  arr.forEach(function(item) {
    iter(item, finish)
  })

  function finish() {
    if (--total === 0) done()
  }
}
$(document).ready(function() {
  var store    = new Storage()
    , defaults = {}

  defaults[STORE.COLLAPSE] = false
  defaults[STORE.REMEMBER] = false
  defaults[STORE.WIDTH]    = 250
  defaults[STORE.HOTKEYS]  = '⌘+⇧+s, ⌃+⇧+s'
  parallel(Object.keys(defaults), setDefault, loadExtension)

  function setDefault(key, cb) {
    store.get(key, function(val) {
      if (val != null) return cb()
      store.set(key, defaults[key], cb)
    })
  }

  function loadExtension() {
    var $html     = $('html')
      , $document = $(document)
      , $dom      = $(TEMPLATE)
      , $sidebar  = $dom.find('.octotree_sidebar')
      , $toggler  = $sidebar.find('.octotree_toggle')
      , $views    = $sidebar.find('.octotree_view')
      , adapter   = new GitHub()
      , optsView  = new OptionsView($dom, store)
      , helpPopup = new HelpPopup($dom, store)
      , treeView  = new TreeView($dom, store, adapter)
      , errorView = new ErrorView($dom, store)
      , currRepo  = false
      , hasError  = false

    store.get(STORE.WIDTH, function(width) {
      $sidebar
        .appendTo($('body'))
        .width(width)
        .resizable({ handles: 'e', minWidth: 200 })
        .resize(layoutChanged)

      $(window).resize(function(event) { // handle zoom
        if (event.target === window) layoutChanged()
      })

      $toggler.click(toggleSidebarAndSave)
      key.filter = function() { return $toggler.is(':visible') }
      store.get(STORE.HOTKEYS, function(hotkeys) {
        key(hotkeys, toggleSidebarAndSave)
      })

      ;[treeView, errorView, optsView].forEach(function(view) {
        $(view)
          .on(EVENT.VIEW_READY, function(event) {
            if (this !== optsView) $document.trigger(EVENT.REQ_END)
            showView(this.$view)
          })
          .on(EVENT.VIEW_CLOSE, function() {
            showView(hasError ? errorView.$view : treeView.$view)
          })
          .on(EVENT.OPTS_CHANGE, optionsChanged)
      })

      $document
        .on('pjax:send ' + EVENT.REQ_START, function() {
          $toggler.addClass('loading')
        })
        .on('pjax:end ' + EVENT.REQ_END, function() {
          $toggler.removeClass('loading')
        })
        .on('pjax:timeout', function(event) {
          event.preventDefault()
        })
        .on(EVENT.LOC_CHANGE, tryLoadRepo)
        .on(EVENT.TOGGLE, layoutChanged)

      tryLoadRepo()
    })

    function optionsChanged(event, changes) {
      var reload = false
      Object.keys(changes).forEach(function(storeKey) {
        var value = changes[storeKey]
        switch (storeKey) {
          case STORE.COLLAPSE:
          case STORE.TOKEN:
            reload = true
            break
          case STORE.HOTKEYS:
            key.unbind(value[0])
            key(value[1], toggleSidebar)
            break
        }
      })
      if (reload) tryLoadRepo(true)
    }

    function tryLoadRepo(reload) {
      var repo = adapter.getRepoFromPath()
      if (repo) {
        helpPopup.show()
        $toggler.show()
        store.get(STORE.REMEMBER, function(remember) {
          store.get(STORE.SHOWN, function(shown) {
            var repoChanged = JSON.stringify(repo) !== JSON.stringify(currRepo)
            if (remember && shown) toggleSidebar(true)
            if (repoChanged || reload === true) {
              $document.trigger(EVENT.REQ_START)
              currRepo = repo
              treeView.showHeader(repo)
              store.get(STORE.TOKEN, true, function(token) {
                adapter.fetchData({ repo: repo, token: token }, function(err, tree) {
                  hasError = !!err
                  if (err) errorView.show(err)
                  else treeView.show(repo, tree)
                })
              })
            }
            else treeView.syncSelection()
          })
        })
      }
      else {
        $toggler.hide()
        toggleSidebar(false)
      }
    }

    function showView(view) {
      $views.removeClass('current')
      view.addClass('current')
    }

    function toggleSidebarAndSave() {
      store.set(STORE.SHOWN, !$html.hasClass(PREFIX), toggleSidebar)
    }

    function toggleSidebar(visibility) {
      if (visibility !== undefined) {
        if ($html.hasClass(PREFIX) === visibility) return
        toggleSidebar()
      }
      else {
        $html.toggleClass(PREFIX)
        $document.trigger(EVENT.TOGGLE, $html.hasClass(PREFIX))
      }
    }

    function layoutChanged() {
      var width = $sidebar.width()
      adapter.updateLayout($html.hasClass(PREFIX), width)
      store.set(STORE.WIDTH, width)
    }
  }
})
set guioptions -=T 	" Remove toolbar
"set guioptions -=t 	" Remove tear-off menus
"set guioptions +=c 	" Use :ex command-mode prompts instead of modal dialogs
set guioptions -=e 	" Use terminal style tabs instead of real ones
set guioptions +=LlRrb  " Add scrollbars in one shot so we can remove them below
set guioptions -=LlRrb  " Remove scrollbars

:set guioptions-=m  "remove menu bar
:set guioptions-=T  "remove toolbar
:set guioptions-=r  "remove right-hand scroll bar
:set guioptions-=L  "remove left-hand scroll bar


set vb t_vb=
set guifont=Ubuntu\ Mono\ derivative\ Powerline\ Regular\ 13
if has("gui_macvim")
  set guifont=Source\ Code\ Pro\ for\ Powerline:h14
  set transparency=2
elseif has("Win32")
  set guifont=Consolas:h11
  set transparency=2
end

" Setting these in GVim/MacVim because terminals cannot distinguish between
" <Space> and <S-Space> because curses sees them the same
nnoremap <Space> <PageDown>
nnoremap <S-Space> <PageUp>

" Turn off bell (for real)
autocmd! GUIEnter * set vb t_vb=

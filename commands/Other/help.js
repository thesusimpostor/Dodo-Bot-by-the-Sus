module.exports ={
  name:"help",
  code: `$title[1;Help Commands]
$description[1; Select an Category to get Started!]
$addSelectMenu[1;help;select an required option;1;1;no;Mod:Mod Commands category!:mod:no:🛡️;Fun:Fun Commands category!:fun:no:🤣;Utility:Utility Commands category!:utility:no:⚙️]
$footer[1;v1 maintained by dodoGames modified by the sus]
$color[1;AQUA]
$editIn[10m; {
 "embeds" : "{newEmbed:{title:Help Commands}{description:select one of the options to check Commands!}}" ,
 "components" : "{actionRow:{selectMenu:help:select an required option::1::1:yes:{selectMenuOptions:Mod:mod:Mod Commands category!:no:🛡️}{selectMenuOptions:Fun:fun:Fun Commands category!:no:🤣}{selectMenuOptions:Utility:utility:Utility Commands category!:no:⚙️}"
 }]`
} 

bcc32 -W -DUNICODE -D_UNICODE -O1 -x- -RT- -d placard-gen.cpp shlwapi.lib
brc32 placard-gen_res.rc placard-gen.exe

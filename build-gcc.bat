g++ -c -O3 -DUNICODE -D_UNICODE placard-gen.cpp -o placard-gen.o
windres -i placard-gen_res.rc -o placard-gen_res.o
g++ -mwindows -O3 -o placard-gen placard-gen.o placard-gen_res.o -lshlwapi
strip placard-gen.exe
del *.o

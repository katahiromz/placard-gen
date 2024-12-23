// 用紙サイズ情報
const pla_page_size_info = [
    // A0....A10
    { value: "A3", text: "A3", long_mm: 420, short_mm: 297 },
    { value: "A4", text: "A4", long_mm: 297, short_mm: 210 },
    { value: "A5", text: "A5", long_mm: 210, short_mm: 148 },

    // B0...B10 (JIS)
    { value: "B4", text: "B4 (ISO)", long_mm: 364, short_mm: 257 },
    { value: "B5", text: "B5 (ISO)", long_mm: 257, short_mm: 182 },
    { value: "JIS-B4", text: "B4 (JIS)", long_mm: 364, short_mm: 257 },
    { value: "JIS-B5", text: "B5 (JIS)", long_mm: 257, short_mm: 182 },

    // Executive, Letter, Legal etc.
    { value: "executive", text: "Executive", long_mm: 257, short_mm: 184 },
    { value: "letter", text: "Letter", long_mm: 279, short_mm: 216 },
    { value: "legal", text: "Legal", long_mm: 356, short_mm: 216 },
    { value: "tabloid", text: "Tabloid", long_mm: 432, short_mm: 279 },
];

declare namespace colors {
    /**
     * White: 1
     * _____________________
     * @Decimal 1
     * @HEX 0x1
     * @MineCraftColor 0
     * @HexCode #F0F0F0
     * @RGB 240, 240, 240
     * @GrayValue 0xF0
     */
    var white: 0x1
    /**
     * Orange: 2
     * _____________________
     * @Decimal 2
     * @HEX 0x2
     * @MineCraftColor 1
     * @HexCode #F2B233
     * @RGB 242, 178, 51
     * @GrayValue 0x9D
     */
    var orange: 0x2
    /**
     * Magenta: 4
     * _____________________
     * @Decimal 4
     * @HEX 0x4
     * @MineCraftColor 2
     * @HexCode #E57FD8
     * @RGB 229, 127, 216
     * @GrayValue 0xBE
     */
    var magenta: 0x4
    /**
     * LightBlue: 8
     * _____________________
     * @Decimal 8
     * @HEX 0x8
     * @MineCraftColor 3
     * @HexCode #99B2F2
     * @RGB 153, 178, 242
     * @GrayValue 0xBF
     */
    var lightBlue: 0x8
    /**
     * Yellow: 16
     * _____________________
     * @Decimal 16
     * @HEX 0x10
     * @MineCraftColor 4
     * @HexCode #DEDE6C
     * @RGB 222, 222, 108
     * @GrayValue 0xB8
     */
    var yellow: 0x10
    /**
     * Lime: 32
     * _____________________
     * @Decimal 32
     * @HEX 0x20
     * @MineCraftColor 5
     * @HexCode #7FCC19
     * @RGB 127, 204, 25
     * @GrayValue 0x76
     */
    var lime: 0x20
    /**
     * Pink: 64
     * _____________________
     * @Decimal 64
     * @HEX 0x40
     * @MineCraftColor 6
     * @HexCode #F2B2CC
     * @RGB 242, 178, 204
     * @GrayValue 0xD0
     */
    var pink: 0x40
    /**
     * Gray: 128
     * _____________________
     * @Decimal 128
     * @HEX 0x80
     * @MineCraftColor 7
     * @HexCode #4C4C4C
     * @RGB >76, 76, 76
     * @GrayValue 0x4C
     */
    var gray: 0x80
    /**
     * LightGray: 256
     * _____________________
     * @Decimal 256
     * @HEX 0x100
     * @MineCraftColor 8
     * @HexCode #999999
     * @RGB 153, 153, 153
     * @GrayValue 0x99
     */
    var lightGray: 0x100
    /**
     * Cyan: 512
     * _____________________
     * @Decimal 512
     * @HEX 0x200
     * @MineCraftColor 9
     * @HexCode #4C99B2
     * @RGB >76, 153, 178
     * @GrayValue 0x87
     */
    var cyan: 0x200
    /**
     * Purple: 1024
     * _____________________
     * @Decimal 1024
     * @HEX 0x400
     * @MineCraftColor a
     * @HexCode #B266E5
     * @RGB 178, 102, 229
     * @GrayValue 0xA9
     */
    var purple: 0x400
    /**
     * Blue: 2048
     * _____________________
     * @Decimal 2048
     * @HEX 0x800
     * @MineCraftColor b
     * @HexCode #3366CC
     * @RGB >51, 102, 204
     * @GrayValue 0x77
     */
    var blue: 0x800
    /**
     * Brown: 4096
     * _____________________
     * @Decimal 4096
     * @HEX 0x1000
     * @MineCraftColor c
     * @HexCode #7F664C
     * @RGB 127, 102, 76
     * @GrayValue 0x65
     */
    var brown: 0x1000
    /**
     * Green: 8192
     * _____________________
     * @Decimal 8192
     * @HEX 0x2000
     * @MineCraftColor d
     * @HexCode #57A64E
     * @RGB >87, 166, 78
     * @GrayValue 0x6E
     */
    var green: 0x2000
    /**
     * Red: 16384
     * _____________________
     * @Decimal 16384
     * @HEX 0x4000
     * @MineCraftColor e
     * @HexCode #CC4C4C
     * @RGB 204, 76, 76
     * @GrayValue 0x76
     */
    var red: 0x4000
    /**
     * Black: 32768
     * _____________________
     * @Decimal 32768
     * @HEX 0x8000
     * @MineCraftColor f
     * @HexCode #111111
     * @RGB >17, 17, 17
     * @GrayValue 0x11
     */
    var black: 0x8000

    /** A phantom type to ease the use of colors */
    type Color = 0x1 | 0x2 | 0x4 | 0x8 | 0x10 | 0x20 | 0x40 | 0x80 | 0x100 | 0x200 | 0x400 | 0x800 | 0x1000 | 0x2000 | 0x4000 | 0x8000
    type ColorSet = Color | number

    /**
     * Combines a set of colors (or sets of colors) into a larger set. Useful for Bundled Cables.
     * ______________________________________________________________________________________________________________
     *
     * @param colors The colors to combine.
     * @return ColorSet The union of the color sets given in `...colors`
     * @usage
     * ```lua
     * colors.combine(colors.white, colors.magenta, colours.lightBlue)
     * => 13
     * ```
     */
    function combine(...colors: Color[]): ColorSet

    /**
     * Removes one or more colors (or sets of colors) from an initial set. Useful for Bundled Cables.
     * ______________________________________________________________________________________________________________
     *
     * @description 
     * Each parameter beyond the first may be a single color or may be a set of
     * colors (in the latter case, all colors in the set are removed from the
     * original set).
     *
     * @param original The color from which to subtract.
     * @param colors The colors to subtract.
     * @return ColorSet The resulting color.
     * @usage
     * ```lua
     * colours.subtract(colours.lime, colours.orange, colours.white)
     * => 32
     * ```
     */
    function subtract(original: ColorSet, ...colors: ColorSet[]): ColorSet

    /** 
     * Tests whether `needle` is contained within `target`. Useful for Bundled Cables.
     * ______________________________________________________________________________________________________________
     *
     * @param target A color, or color set to look for `needle` within
     * @param needle A color or set of colors that `target` should contain.
     * @return boolean If `target` contains all colors within `needle`.
     * @usage
     * ```lua
     * colors.test(colors.combine(colors.white, colors.magenta, colours.lightBlue), colors.lightBlue)
     * => true
     * ```
     */
    function test(target: ColorSet, needle: ColorSet): boolean

    /**
     * Combine a three-colour RGB value into one hexadecimal representation.
     * ______________________________________________________________________________________________________________
     *
     * @param r The red channel, should be between 0 and 1.
     * @param g The red channel, should be between 0 and 1.
     * @param b The blue channel, should be between 0 and 1.
     * @return ColorSet The combined hexadecimal colour.
     * @usage
     * ```lua
     * colors.packRGB(0.7, 0.2, 0.6)
     * => 0xb23399
     * ```
     */
    function packRGB(r: number, g: number, b: number): ColorSet

    /** Phantom Type denoting the range of possible values for a color (r, g, or b).*/
    type DecimalColorRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 130 | 131 | 132 | 133 | 134 | 135 | 136 | 137 | 138 | 139 | 140 | 141 | 142 | 143 | 144 | 145 | 146 | 147 | 148 | 149 | 150 | 151 | 152 | 153 | 154 | 155 | 156 | 157 | 158 | 159 | 160 | 161 | 162 | 163 | 164 | 165 | 166 | 167 | 168 | 169 | 170 | 171 | 172 | 173 | 174 | 175 | 176 | 177 | 178 | 179 | 180 | 181 | 182 | 183 | 184 | 185 | 186 | 187 | 188 | 189 | 190 | 191 | 192 | 193 | 194 | 195 | 196 | 197 | 198 | 199 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 209 | 210 | 211 | 212 | 213 | 214 | 215 | 216 | 217 | 218 | 219 | 220 | 221 | 222 | 223 | 224 | 225 | 226 | 227 | 228 | 229 | 230 | 231 | 232 | 233 | 234 | 235 | 236 | 237 | 238 | 239 | 240 | 241 | 242 | 243 | 244 | 245 | 246 | 247 | 248 | 249 | 250 | 251 | 252 | 253 | 254 | 255
    /** Phantom Type used for colors */
    type UnpackedRGB = [red: DecimalColorRange, green: DecimalColorRange, blue: DecimalColorRange]
    /** Phantom Type that is not currently being used to my knowledge but logically may at some point be. */
    type UnpackedRGBA = [red: DecimalColorRange, green: DecimalColorRange, blue: DecimalColorRange, alpha: DecimalColorRange]

    /**
     * Separate a hexadecimal RGB colour into its three constituent channels.
     * ______________________________________________________________________________________________________________
     *
     * @param color The combined hexadecimal colour.
     * @tupleReturn
     * @return number The red channel, will be between 0 and 1.
     * @return number The green channel, will be between 0 and 1.
     * @return number The blue channel, will be between 0 and 1.
     * @usage
     * ```lua
     * colors.unpackRGB(0xb23399)
     * => 0.7, 0.2, 0.6
     * ```
     * @see colors.packRGB
     */
    function unpackRGB(color: Color | ColorSet): UnpackedRGB

    /**
     * Either calls {@link colors.packRGB} or {@link colors.unpackRGB}, depending on how many arguments it receives.
     * ______________________________________________________________________________________________________________
     * @deprecated Use {@link packRGB} or {@link unpackRGB} directly.
     * ______________________________________________________________________________________________________________
     *
     * @param[1] number r The red channel, as an argument to {@link colors.packRGB}.
     * @param[1] number g The green channel, as an argument to {@link colors.packRGB}.
     * @param[1] number b The blue channel, as an argument to {@link colors.packRGB}.
     * @param[2] number rgb The combined hexadecimal color, as an argument to {@link colors.unpackRGB}.
     * @tupleReturn
     * @return[1] number The combined hexadecimal colour, as returned by {@link colors.packRGB}.
     * @return[2] number The red channel, as returned by {@link colors.unpackRGB}
     * @return[2] number The green channel, as returned by {@link colors.unpackRGB}
     * @return[2] number The blue channel, as returned by {@link colors.unpackRGB}
     * @usage
     * ```lua
     * colors.rgb8(0xb23399)
     * => 0.7, 0.2, 0.6
     * ```
     * @usage
     * ```lua
     * colors.rgb8(0.7, 0.2, 0.6)
     * => 0xb23399
     * ```
     */
    function rgb8(r: number, g: number, b: number): [number, ...UnpackedRGB]

    /** Phantom Type for all the minecraft colors */
    type MinecraftColor = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'a' | 'b' | 'c' | 'd' | 'f'

    /**
     * Converts the given color to a paint/blit hex character (0-9a-f).
     * ______________________________________________________________________________________________________________
     *
     * This is equivalent to converting floor(log_2(color)) to hexadecimal. (Also known as a Minecraft Color)
     *
     * @param color The color to convert.
     * @return string The blit hex code of the color.
     */
    function toBlit(color: ColorSet): MinecraftColor
}

import colours = colors
/**
 * A position of the cursor on a screen relative to the top left.
 *
 * @t number The x position of the cursor.
 * @t number The y position of the cursor.
 */
type ScreenPosition = [x: number, y: number]

/**
 * The size of a terminal.
 *
 * @t number The terminal's width.
 * @t number The terminal's height.
 */
type ScreenSize = [width: number, height: number]

/** Terminal Redirect 
 * @noSelf
 */
declare class Redirect {

    /**
     * Get the default palette value for a colour.
     *
     * @param colour The colour whose palette should be fetched.
     * @return The RGB values.
     * @throws LuaException When given an invalid colour.
     * @tupleReturn
     * @return number The red channel, will be between 0 and 1.
     * @return number The green channel, will be between 0 and 1.
     * @return number The blue channel, will be between 0 and 1.
     * @see TermMethods#setPaletteColour(IArguments) To change the palette colour.
     */
    nativePaletteColour( colour: number ): colors.UnpackedRGB

    /**
     * Get the default palette value for a color.
     *
     * @param color The color whose palette should be fetched.
     * @return The RGB values.
     * @throws LuaException When given an invalid color.
     * @tupleReturn
     * @return number The red channel, will be between 0 and 1.
     * @return number The green channel, will be between 0 and 1.
     * @return number The blue channel, will be between 0 and 1.
     * @see TermMethods#setPaletteColor(IArguments) To change the palette color.
     */
    nativePaletteColor( color: number ): colors.UnpackedRGB

    /**
     * Write {@code text} at the current cursor position, moving the cursor to the end of the text.
     *
     * Unlike functions like {@code write} and {@code print}, this does not wrap the text - it simply copies the
     * text to the current terminal line.
     *
     * @param arguments The text to write.
     * @throws LuaException (hidden) If the terminal cannot be found.
     * @cc.param text The text to write.
     */
    write( ...args: any[] ): void

    /**
     * Move all positions up (or down) by {@code y} pixels.
     *
     * Every pixel in the terminal will be replaced by the line {@code y} pixels below it. If {@code y} is negative, it
     * will copy pixels from above instead.
     *
     * @param y The number of lines to move up by. This may be a negative number.
     * @throws LuaException (hidden) If the terminal cannot be found.
     */
    scroll( y: number ): void

    /**
     * Get the position of the cursor.
     *
     * @return The cursor's position.
     * @throws LuaException (hidden) If the terminal cannot be found.
     * @tupleReturn
     * @return number The x position of the cursor.
     * @return number The y position of the cursor.
     */
    getCursorPos(): ScreenPosition

    /**
     * Set the position of the cursor. {@link #write(IArguments) terminal writes} will begin from this position.
     *
     * @param x The new x position of the cursor.
     * @param y The new y position of the cursor.
     * @throws LuaException (hidden) If the terminal cannot be found.
     */
    setCursorPos( x: number, y: number ): void

    /**
     * Checks if the cursor is currently blinking.
     *
     * @return If the cursor is blinking.
     * @throws LuaException (hidden) If the terminal cannot be found.
     */
    getCursorBlink(): boolean

    /**
     * Sets whether the cursor should be visible (and blinking) at the current {@link #getCursorPos() cursor position}.
     *
     * @param blink Whether the cursor should blink.
     * @throws LuaException (hidden) If the terminal cannot be found.
     */
    setCursorBlink( blink: boolean ): void

    /**
     * Get the size of the terminal.
     *
     * @return The terminal's size.
     * @throws LuaException (hidden) If the terminal cannot be found.
     * @tupleReturn
     * @return number The terminal's width.
     * @return number The terminal's height.
     */
    getSize(): ScreenSize

    /**
     * Clears the terminal, filling it with the {@link #getBackgroundColour() current background colour}.
     *
     * @throws LuaException (hidden) If the terminal cannot be found.
     */
    clear(): void

    /**
     * Clears the line the cursor is currently on, filling it with the {@link #getBackgroundColour() current background
     * colour}.
     *
     * @throws LuaException (hidden) If the terminal cannot be found.
     */
    clearLine(): void

    /**
     * Return the colour that new text will be written as.
     *
     * @return The current text colour.
     * @throws LuaException (hidden) If the terminal cannot be found.
     * @see colors For a list of colour constants, returned by this function.
     */
    getTextColour(): number

    /**
     * Return the color that new text will be written as.
     *
     * @return The current text color.
     * @throws LuaException (hidden) If the terminal cannot be found.
     * @see colors For a list of color constants, returned by this function.
     */
    getTextColor(): number

    /**
     * Set the colour that new text will be written as.
     *
     * @param colourArg The new text colour.
     * @throws LuaException (hidden) If the terminal cannot be found.
     * @see colors For a list of colour constants.
     */
    setTextColour( colourArg: number ): void

    /**
     * Set the colour that new text will be written as.
     *
     * @param colourArg The new text colour.
     * @throws LuaException (hidden) If the terminal cannot be found.
     * @see colors For a list of colour constants.
     */
    setTextColor( colorArg: number ): void

    /**
     * Return the current background colour. This is used when {@link #write writing text} and {@link #clear clearing}
     * the terminal.
     *
     * @return The current background colour.
     * @throws LuaException (hidden) If the terminal cannot be found.
     * @see colors For a list of colour constants, returned by this function.
     */
    getBackgroundColour(): number

    /**
     * Return the current background color. This is used when {@link #write writing text} and {@link #clear clearing}
     * the terminal.
     *
     * @return The current background color.
     * @throws LuaException (hidden) If the terminal cannot be found.
     * @see colors For a list of color constants, returned by this function.
     */
    getBackgroundColor(): number

    /**
     * Set the current background colour. This is used when {@link term.write |writing text} and {@link term.clear |clearing} the
     * terminal.
     *
     * @param colourArg The new background colour.
     * @throws LuaException (hidden) If the terminal cannot be found.
     * @see colors For a list of colour constants.
     */
    setBackgroundColour( colourArg: colors.Color ): void

    /**
     * Set the current background colour. This is used when {@link term.write |writing text} and {@link term.clear |clearing} the
     * terminal.
     *
     * @param colorArg The new background colour.
     * @throws LuaException (hidden) If the terminal cannot be found.
     * @see colors For a list of colour constants.
     */
    setBackgroundColor( colorArg: colors.Color ): void

    /**
     * Determine if this terminal supports colour.
     *
     * Terminals which do not support colour will still allow writing coloured text/backgrounds, but it will be displayed in greyscale.
     *
     * @return Whether this terminal supports colour.
     * @throws LuaException (hidden) If the terminal cannot be found.
     */
    isColour(): boolean

    /**
     * Determine if this terminal supports colour.
     *
     * Terminals which do not support colour will still allow writing coloured text/backgrounds, but it will be displayed in greyscale.
     *
     * @return Whether this terminal supports colour.
     * @throws LuaException (hidden) If the terminal cannot be found.
     */
    isColor(): boolean

    /**
     * Writes `text` to the terminal with the specific foreground and background characters.
     * ___________________________________________________________________________________________
     *
     * As with {@link term.write}, the text will be written at the current cursor location, with the cursor
     * moving to the end of the text.
     *
     * `textColour` and `backgroundColour` must both be strings the same length as `text`. All
     * characters represent a single hexadecimal digit, which is converted to one of CC's colours. For instance,
     * `"a"`} corresponds to purple.
     *
     * @param text             The text to write.
     * @param textColour       The corresponding text colours.
     * @param backgroundColour The corresponding background colours.
     * @usage Prints "Hello, world!" in rainbow text.
     * ```lua
     * term.blit("Hello, world!","01234456789ab","0000000000000")
     * ```
     * @throws LuaException If the three inputs are not the same length.
     * @see colors For a list of colour constants, and their hexadecimal values.
     */
    blit( text: string, textColour: string, backgroundColour: string ): void

    /**
     * Set the palette for a specific colour.
     *
     * ComputerCraft's palette system allows you to change how a specific colour should be displayed. For instance, you
     * can make @{colors.red} <em>more red</em> by setting its palette to #FF0000. This does now allow you to draw more
     * colours - you are still limited to 16 on the screen at one time - but you can change <em>which</em> colours are
     * used.
     *
     * @param args The new palette values.
     * @throws LuaException (hidden) If the terminal cannot be found.
     * @param [1] number index The colour whose palette should be changed.
     * @param number colour A 24-bit integer representing the RGB value of the colour. For instance the integer
     * `0xFF0000` corresponds to the colour #FF0000.
     * @param [2] number index The colour whose palette should be changed.
     * @param number r The intensity of the red channel, between 0 and 1.
     * @param number g The intensity of the green channel, between 0 and 1.
     * @param number b The intensity of the blue channel, between 0 and 1.
     * @usage Change the @{colors.red|red colour} from the default #CC4C4C to #FF0000.
     * ```lua
     * term.setPaletteColour(colors.red, 0xFF0000)
     * term.setTextColour(colors.red)
     * print("Hello, world!")
     * ```
     * @usage As above, but specifying each colour channel separately.
     * ```lua
     * term.setPaletteColour(colors.red, 1, 0, 0)
     * term.setTextColour(colors.red)
     * print("Hello, world!")
     * ```
     * @see colors.unpackRGB To convert from the 24-bit format to three separate channels.
     * @see colors.packRGB To convert from three separate channels to the 24-bit format.
     */
    setPaletteColour( ...args: any[] ): void

    /**
     * Set the palette for a specific colour.
     *
     * ComputerCraft's palette system allows you to change how a specific colour should be displayed. For instance, you
     * can make @{colors.red} <em>more red</em> by setting its palette to #FF0000. This does now allow you to draw more
     * colours - you are still limited to 16 on the screen at one time - but you can change <em>which</em> colours are
     * used.
     *
     * @param args The new palette values.
     * @throws LuaException (hidden) If the terminal cannot be found.
     * @param [1] number index The colour whose palette should be changed.
     * @param number colour A 24-bit integer representing the RGB value of the colour. For instance the integer
     * `0xFF0000` corresponds to the colour #FF0000.
     * @param [2] number index The colour whose palette should be changed.
     * @param number r The intensity of the red channel, between 0 and 1.
     * @param number g The intensity of the green channel, between 0 and 1.
     * @param number b The intensity of the blue channel, between 0 and 1.
     * @usage Change the @{colors.red|red colour} from the default #CC4C4C to #FF0000.
     * ```lua
     * term.setPaletteColour(colors.red, 0xFF0000)
     * term.setTextColour(colors.red)
     * print("Hello, world!")
     * ```
     * @usage As above, but specifying each colour channel separately.
     * ```lua
     * term.setPaletteColour(colors.red, 1, 0, 0)
     * term.setTextColour(colors.red)
     * print("Hello, world!")
     * ```
     * @see colors.unpackRGB To convert from the 24-bit format to three separate channels.
     * @see colors.packRGB To convert from three separate channels to the 24-bit format.
     */
    setPaletteColor( ...args: any[] ): void

    /**
     * Get the current palette for a specific colour.
     *
     * @param colourArg The colour whose palette should be fetched.
     * @return The resulting colour.
     * @throws LuaException (hidden) If the terminal cannot be found.
     * @tupleReturn
     * @return number The red channel, will be between 0 and 1.
     * @return number The green channel, will be between 0 and 1.
     * @return number The blue channel, will be between 0 and 1.
     */
    getPaletteColour( colourArg: colors.Color ) : colors.UnpackedRGB

    /**
     * Get the current palette for a specific colour.
     *
     * @param colourArg The colour whose palette should be fetched.
     * @return The resulting colour.
     * @throws LuaException (hidden) If the terminal cannot be found.
     * @tupleReturn
     * @return number The red channel, will be between 0 and 1.
     * @return number The green channel, will be between 0 and 1.
     * @return number The blue channel, will be between 0 and 1.
     */
    getPaletteColor( colourArg: colors.Color ) : colors.UnpackedRGB

    /**
     * Returns the current terminal object of the computer.
     * _______________________________________________________
     * @return Redirect The current terminal redirect
     * @usage
     * Create a new {@link window} which draws to the current redirect target
     * ```lua
     *     window.create(term.current(), 1, 1, 10, 10)
     * ```
     */
    current(): Redirect

    /**
     * Get the native terminal object of the current computer.
     * __________________________________________
     *
     * It is recommended you do not use this function unless you absolutely have
     * to. In a multitasked environment, {@link term.native} will _not_ be the current
     * terminal object, and so drawing may interfere with other programs.
     *
     * @return Redirect The native terminal redirect.
     */
    native(): Redirect
}

declare const term: Redirect

// term.blit
// term.clear
// term.clearLine
// CraftOS-PC term.drawPixels will not be documented because only part of CraftOS PC Emulation
// term.getBackgroundColor
// term.getBackgroundColour
// term.getCursorBlink
// term.getCursorPos
// CraftOS-PC term.getGraphicsMode will not be documented because only part of CraftOS PC Emulation
// term.getPaletteColor
// term.getPaletteColour
// CraftOS-PC term.getPixel will not be documented because only part of CraftOS PC Emulation
// term.getSize
// term.getTextColor
// term.getTextColour
// term.isColor
// term.isColour
// term.native
// term.nativePaletteColor
// term.nativePaletteColour
// term.redirect
// CraftOS-PC term.screenshot will not be documented because only part of CraftOS PC Emulation
// term.scroll
// term.setBackgroundColor
// term.setBackgroundColour
// term.setCursorBlink
// term.setCursorPos
// CraftOS-PC term.setGraphicsMode will not be documented because only part of CraftOS PC Emulation
// term.setPaletteColor
// term.setPaletteColour
// CraftOS-PC term.setPixel will not be documented because only part of CraftOS PC Emulation
// term.setTextColor
// term.setTextColour
// Unknown Origin term.ShowMouse
// term.write
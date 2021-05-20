/** @noSelfInFile */
declare namespace turtle {
    type TurtleResult = [success: boolean, reason: string | null]
    type TurtleSide = "left" | "right"
    /** turtle inventory slot (1 is top left, 16 is bottom right) */
    type TurtleSlot = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16
    interface InspectItemData {
        name: string,
        metadata?: any,
        count?: number
    }

    /**
     * Move the turtle forward one block.
     * ______________________________________________________________________________________________________________
     *
     * @tupleReturn
     * @return[1] boolean Whether the turtle could successfully move.
     * @return[1] string | nil The reason the turtle could not move.
     * @tupleReturn
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:forward)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.forward)
     */
    function forward(): TurtleResult

    /**
     * Move the turtle backwards one block.
     * ______________________________________________________________________________________________________________
     *
     * @return The turtle command result tuple.
     * @return[1] {boolean} Whether the turtle could successfully move.
     * @return[1] {string | null} The reason the turtle could not move.
     * @tupleReturn
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:back)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.back)
     */
    function back(): TurtleResult

    /**
     * Move the turtle up one block.
     * ______________________________________________________________________________________________________________
     *
     * @return The turtle command result tuple.
     * @return[1] {boolean} Whether the turtle could successfully move.
     * @return[1] {string | null} The reason the turtle could not move.
     * @tupleReturn
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:up)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.up)
     */
    function up(): TurtleResult

    /**
     * Move the turtle down one block.
     * ______________________________________________________________________________________________________________
     *
     * @return The turtle command result tuple.
     * @return[1] {boolean} Whether the turtle could successfully move.
     * @return[1] {string | null} The reason the turtle could not move.
     * @tupleReturn
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:down)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.down)
     */
    function down(): TurtleResult

    /**
     * Rotate the turtle 90 degress to the left.
     * ______________________________________________________________________________________________________________
     *
     * @return The turtle command result tuple.
     * @return[1] boolean Whether the turtle could successfully turn.
     * @return[1] string | nil The reason the turtle could not turn.
     * @tupleReturn
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:turnLeft)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.turnLeft)
     */
    function turnLeft(): TurtleResult

    /**
     * Rotate the turtle 90 degress to the right.
     * ______________________________________________________________________________________________________________
     *
     * @tupleReturn
     * @return[1] boolean Whether the turtle could successfully turn.
     * @return[1] string | nil The reason the turtle could not turn.
     * @tupleReturn
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:turnRight)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.turnRight)
     */
    function turnRight(): TurtleResult

    /**
     * Attempt to break the block in front of the turtle.
     * ______________________________________________________________________________________________________________
     *
     * This requires a turtle tool capable of breaking the block. Diamond pickaxes
     * (mining turtles) can break any vanilla block, but other tools (such as axes)
     * are more limited.
     * ______________________________________________________________________________________________________________
     *
     * @param side The specific tool to use. Should be "left" or "right".
     * @tupleReturn
     * @return[1] boolean Whether a block was broken.
     * @return[2] string | nil The reason no block was broken.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:dig)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.dig)
     */
    function dig( side?: TurtleSide ): TurtleResult

    /**
     * Attempt to break the block above the turtle. See {@link #dig} for full details.
     * ______________________________________________________________________________________________________________
     * @param side The specific tool to use. Should be "left" or "right".
     * @tupleReturn
     * @return[1] boolean Whether a block was broken.
     * @return[2] string | nil The reason no block was broken.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:digUp)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.digUp)
     */
    function digUp( side?: TurtleSide ):TurtleResult

    /**
     * Attempt to break the block below the turtle. See {@link #dig} for full details.
     * ______________________________________________________________________________________________________________
     * @param side The specific tool to use. Should be "left" or "right".
     * @tupleReturn
     * @return[1] boolean Whether a block was broken.
     * @return[2] string | nil The reason no block was broken.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:digDown)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.digDown)
     */
    function digDown( side?: TurtleSide ):TurtleResult

    /**
     * Place a block or item into the world in front of the turtle.
     * ______________________________________________________________________________________________________________
     * @param args Arguments to place. When placing a sign, set its contents to this text.
     * @param args text When placing a sign, set its contents to this text.
     * @tupleReturn
     * @return[1] boolean Whether the block could be placed.
     * @return[2] string | nil The reason the block was not placed.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:place)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.place)
     */
    function place( ...args: any[] ):TurtleResult
    function place( text: string ):TurtleResult

    /**
     * Place a block or item into the world above the turtle.
     * ______________________________________________________________________________________________________________
     * @param args Arguments to place. When placing a sign, set its contents to this text.
     * @param args string text When placing a sign, set its contents to this text.
     * @tupleReturn
     * @return[1] boolean Whether the block could be placed.
     * @return[2] string | nil The reason the block was not placed.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:placeUp)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.placeUp)
     */
    function placeUp( ...args: any[] ):TurtleResult

    /**
     * Place a block or item into the world below the turtle.
     * ______________________________________________________________________________________________________________
     * @param args Arguments to place. When placing a sign, set its contents to this text.
     * @param args string text When placing a sign, set its contents to this text.
     * @tupleReturn
     * @return[1] boolean Whether the block could be placed.
     * @return[2] string | nil The reason the block was not placed.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:placeDown)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.placeDown)
     */
    function placeDown( ...args: any[] ):TurtleResult

    /**
     * Drop the currently selected stack into the inventory in front of the turtle, or as an item into the world if
     * there is no inventory.
     * ______________________________________________________________________________________________________________
     * @param count The number of items to drop. If not given, the entire stack will be dropped.
     * @tupleReturn
     * @throws LuaException If dropping an invalid number of items.
     * @return[1] boolean Whether items were dropped.
     * @return[2] string | nil The reason the no items were dropped.
     * @see #select If dropping an invalid number of items.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:drop)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.drop)
     */
    function drop( count?: number ): TurtleResult

    /**
     * Drop the currently selected stack into the inventory above the turtle, or as an item into the world if there is
     * no inventory.
     * ______________________________________________________________________________________________________________
     *
     * @param count The number of items to drop. If not given, the entire stack will be dropped.
     * @tupleReturn
     * @throws LuaException If dropping an invalid number of items.
     * @return[1] boolean Whether items were dropped.
     * @return[2] string | nil The reason the no items were dropped.
     * @see #select To select which item to drop.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:dropUp)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.dropUp)
     */
    function dropUp( count?: number ): TurtleResult

    /**
     * Drop the currently selected stack into the inventory in front of the turtle, or as an item into the world if
     * there is no inventory.
     * ______________________________________________________________________________________________________________
     *
     * @param count The number of items to drop. If not given, the entire stack will be dropped.
     * @tupleReturn
     * @throws LuaException If dropping an invalid number of items.
     * @return[1] boolean Whether items were dropped.
     * @return[2] string | nil The reason the no items were dropped.
     * @see #select
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:dropDown)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.dropDown)
     */
    function dropDown( count?: number ): TurtleResult

    /**
     * Change the currently selected slot.
     * ______________________________________________________________________________________________________________
     *
     * The selected slot is determines what slot actions like {@link #drop} or {@link #getItemCount} act on.
     * Turtle inventory slot numbers are between 1 (top left) and 16 (bottom right)
     * ______________________________________________________________________________________________________________
     *
     * @param slot The slot to select.
     * @tupleReturn
     * @throws LuaException If the slot is out of range.
     * @return true When the slot has been selected.
     * @see #getSelectedSlot
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:select)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.select)
     */

    function select(slot: TurtleSlot): boolean

    /**
     * Get the number of items in the given slot.
     * ______________________________________________________________________________________________________________
     *
     * @param slot The slot we wish to check. Defaults to the {@link #select selected slot}.
     * @return The number of items in this slot.
     * @throws LuaException If the slot is out of range.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:getItemCount)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.getItemCount)
     */
    function getItemCount( slot?: TurtleSlot ): number

    /**
     * Get the remaining number of items which may be stored in this stack.
     *
     * For instance, if a slot contains 13 blocks of dirt, it has room for another 51.
     * ______________________________________________________________________________________________________________
     *
     * @param slot The slot we wish to check. Defaults to the {@link #select selected slot}.
     * @return The space left in in this slot.
     * @throws LuaException If the slot is out of range.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:getItemSpace)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.getItemSpace)
     */
    function getItemSpace( slot?: TurtleSlot ): number

    /**
     * Check if there is a solid block in front of the turtle. In this case, solid refers to any non-air or liquid
     * block.
     * ______________________________________________________________________________________________________________
     *
     * @cc.treturn boolean If there is a solid block in front.
     * @see [CC: Tweaked Docks](https://tweaked.cc/module/turtle.html#v:detect)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.detect)
     */
    function detect(): boolean

    /**
     * Check if there is a solid block above the turtle. In this case, solid refers to any non-air or liquid block.
     * ______________________________________________________________________________________________________________
     *
     * @cc.treturn boolean If there is a solid block in front.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:detectUp)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.detectUp)
     */
    function detectUp(): boolean

    /**
     * Check if there is a solid block below the turtle. In this case, solid refers to any non-air or liquid block.
     * ______________________________________________________________________________________________________________
     *
     * @cc.treturn boolean If there is a solid block in front.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:detectDown)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.detectDown)
     */
    function detectDown(): boolean

    /**
     * 
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:compare)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.compare)
     */

    function compare(): boolean

    /**
     * 
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:compareUp)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.compareUp)
     */
    function compareUp(): boolean

    /**
     * 
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:compareDown)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.compareDown)
     */

    function compareDown(): boolean

    /**
     * Attack the entity in front of the turtle.
     * ______________________________________________________________________________________________________________
     *
     * @param side The specific tool to use.
     * @tupleReturn
     * @return[1] boolean Whether an entity was attacked.
     * @return[2] string | nil The reason nothing was attacked.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:attack)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.attack)
     */
    function attack( side?: TurtleSide ): TurtleResult

    /**
     * Attack the entity above the turtle.
     * ______________________________________________________________________________________________________________
     *
     * @param side The specific tool to use.
     * @tupleReturn
     * @return[1] boolean Whether an entity was attacked.
     * @return[2] string | nil The reason nothing was attacked.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:attackUp)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.attackUp)
     */
    function attackUp( side?: TurtleSide ): TurtleResult

    /**
     * Attack the entity below the turtle.
     * ______________________________________________________________________________________________________________
     *
     * @param side The specific tool to use.
     * @tupleReturn
     * @return[1] boolean Whether an entity was attacked.
     * @return[2] string | nil The reason nothing was attacked.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:attackDown)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.attackDown)
     */
    function attackDown( side?: TurtleSide ): TurtleResult

    /**
     * Suck an item from the inventory in front of the turtle, or from an item floating in the world.
     *
     * This will pull items into the first acceptable slot, starting at the {@link #select() currently selected} one.
     * ______________________________________________________________________________________________________________
     *
     * @param count The number of items to suck. If not given, up to a stack of items will be picked up.
     * @tupleReturn
     * @throws LuaException If given an invalid number of items.
     * @return[1] boolean Whether items were picked up.
     * @return[2] string | nil The reason the no items were picked up.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:suck)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.suck)
     */
    function suck( count?: number ): TurtleResult

    /**
     * Suck an item from the inventory above the turtle, or from an item floating in the world.
     * 
     * ______________________________________________________________________________________________________________
     * This will pull items into the first acceptable slot, starting at the {@link #select() currently selected} one.
     * ______________________________________________________________________________________________________________
     *
     * @param count The number of items to suck. If not given, up to a stack of items will be picked up.
     * @tupleReturn
     * @throws LuaException If given an invalid number of items.
     * @return[1] boolean Whether items were picked up.
     * @return[2] string | nil The reason the no items were picked up.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:suckUp)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.suckUp)
     */
    function suckUp( count?: number ): TurtleResult

    /**
     * Suck an item from the inventory below the turtle, or from an item floating in the world.
     * ______________________________________________________________________________________________________________
     *
     * This will pull items into the first acceptable slot, starting at the {@link #select() currently selected} one.
     * ______________________________________________________________________________________________________________
     *
     * @param count The number of items to suck. If not given, up to a stack of items will be picked up.
     * @tupleReturn
     * @throws LuaException If given an invalid number of items.
     * @return[1] boolean Whether items were picked up.
     * @return[2] string | nil The reason the no items were picked up.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:suckDown)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.suckDown)
     */
    function suckDown( count?: number ): TurtleResult

    /**
     * Get the turtles current fuel level
     * ______________________________________________________________________________________________________________
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:getFuelLevel)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.getFuelLevel)
     */
    function getFuelLevel(): number | "unlimited"

    /**
     * Consume fuel {@link #select() currently selected} item to refuel the turtle
     * ______________________________________________________________________________________________________________
     * 
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:refuel)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.refuel)
     */

    function refuel( count?: number ): boolean

    /**
     * 
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:compareTo)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.compareTo)
     */

    function compareTo( slot: TurtleSlot ): boolean

    /**
     * Transfers quantity items from the selected slot to the specified slot.
     * ______________________________________________________________________________________________________________
     * **NOTE:** Will not swap items.
     * ______________________________________________________________________________________________________________
     * If the quantity argument is omitted, tries to transfer all the items from the selected slot. If the destination slot already has items of a different type, returns false (does not try to fill the next slot, like suck() would). If there are fewer than quantity items in the selected slot or only room for fewer items in the destination slot, transfers as many as possible and returns true. If none can be transferred, returns false.
     * @example
     * // Transfers 32 items from the selected slot to slot 6.
     * turtle.transferTo(6, 32)
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:transferTo)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.transferTo)
     */

    function transferTo( slot: TurtleSlot, count?: number ): boolean

    /**
     * Get the currently selected inventory slot.
     * ______________________________________________________________________________________________________________
     * 1 (top left)
     * ________________________________
     * 16 (bottom right)
     * ________________________________
     * @return The current Turtle inventory slot number 1 based.
     * @see #select
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:getSelectedSlot)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.getSelectedSlot)
     */
    function getSelectedSlot(): number

    /**
     * This command returns the maximum amount of fuel a turtle may store.
     * ______________________________________________________________________________________________________________
     * By default, a regular turtle may hold 20,000 units, and an advanced model 100,000 units; both values can be changed in config files.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:getFuelLimit)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.getFuelLimit)
     * @example
     * // If a fuel limit is present, consumes fuel items from the selected slot one at a time, until the storage limit is reached; otherwise consumes the entire stack.
     * if turtle.getFuelLevel() ~= "unlimited" then
     * 	if turtle.getFuelLimit() then
     * 		while turtle.getFuelLevel() < turtle.getFuelLimit() and turtle.getItemCount(turtle.getSelectedSlot()) > 0 do
     * 			turtle.refuel(1)
     * 		end
     * 	else
     * 		turtle.refuel()
     * 	end
     * end
     */
    function getFuelLimit(): number | "unlimited"
    
    /**
     * TODO: DELETE THIS it is only for lining up compares
     * Get the maximum possible fuel limit.
     * ______________________________________________________________________________________________________________
     * @return number Maximum fuel limit.
     */
    function getFuelLimit(): number


    /**
     * Equips the item in the selected slot to the left of the bot it it is a valid item for that.
     *  ______________________________________________________________________________________________________________
     * Turtles may have items added to (or even removed from!) them outside of the crafting grid. If a valid item exists in the currently selected inventory slot, this command places it on the turtle's left side. If an item was already present there, it'll be placed back into the inventory in the currently selected slot (assuming it's not taken up by eg an item that the turtle couldn't equip). Both actions can be performed in one go, allowing turtles to instantly swap tools.
     * @tupleReturn
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:equipLeft)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.equipLeft)
     * @example
     * //Executed on a standard melee turtle (with a sword on its left side), and assuming a diamond pick is in the currently selected inventory slot, turns it into a miner turtle.
     * turtle.equipLeft()
     */

    function equipLeft(): TurtleResult

    /**
     * Equips the item in the selected slot to the right of the bot it it is a valid item for that.
     *  ______________________________________________________________________________________________________________
     * Turtles may have items added to (or even removed from!) them outside of the crafting grid. If a valid item exists in the currently selected inventory slot, this command places it on the turtle's right side. If an item was already present there, it'll be placed back into the inventory in the currently selected slot (assuming it's not taken up by eg an item that the turtle couldn't equip). Both actions can be performed in one go, allowing turtles to instantly swap tools.
     * @tupleReturn
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:equipRight)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.equipRight)
     * @example
     * //Executed on a standard melee turtle (with a sword on its right side), and assuming a diamond pick is in the currently selected inventory slot, turns it into a miner turtle.
     * turtle.equipRight()
     */

    function equipRight(): TurtleResult

    /**
     * Get information about the block in front of the turtle.
     *  ______________________________________________________________________________________________________________
     * @tupleReturn
     * @return[1] boolean Whether there is a block in front of the turtle.
     * @return[2] table|string Information about the block in front, or a message explaining that there is no block.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:inspect)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.inspect)
     */
    function inspect(): TurtleResult | [true, InspectItemData]

    /**
     * Get information about the block above the turtle.
     *  ______________________________________________________________________________________________________________
     * @tupleReturn
     * @return[1] boolean Whether there is a block above the turtle.
     * @return[2] table|string Information about the above below, or a message explaining that there is no block.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:inspectUp)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.inspectUp)
     */
    function inspectUp(): TurtleResult | [true, InspectItemData]

    /**
     * Get information about the block below the turtle.
     *  ______________________________________________________________________________________________________________
     * @tupleReturn
     * @return[1] boolean Whether there is a block below the turtle.
     * @return[2] table|string Information about the block below, or a message explaining that there is no block.
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:inspectDown)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.inspectDown)
     */
    function inspectDown(): TurtleResult | [true, InspectItemData]

    /**
     * Get detailed information about the items in the given slot.
     *  ______________________________________________________________________________________________________________
     * @param slot     The slot to get information about. Defaults to the {@link #select selected slot}.
     * @param detailed Whether to include "detailed" information. When `true` the method will contain much
     *                 more information about the item at the cost of taking longer to run.
     * @throws LuaException If the slot is out of range.
     * @return null|table Information about the given slot, or `null` if it is empty.
     * @usage Print the current slot, assuming it contains 13 dirt.
     * ```ts
     * print(textutils.serialize(turtle.getItemDetail()))
     * // => {
     * //   name = "minecraft:dirt",
     * //   count = 13,
     * // }
     * }
     * ```
     * @see [CC: Tweaked Docs](https://tweaked.cc/module/turtle.html#v:getItemDetail)
     * @see [[Out of Date] ComputerCraft Wiki](https://www.computercraft.info/wiki/Turtle.getItemDetail)
     */
    function getItemDetail( slot?: TurtleSlot, detailed?: boolean ): null | InspectItemData
}

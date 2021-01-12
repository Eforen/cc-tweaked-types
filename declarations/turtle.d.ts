/** @noSelfInFile */
declare namespace turtle {
    /**
     * Move the turtle forward one block.
     * ______________________________________________________________________________________________________________
     *
     * @tupleReturn
     * @return[1] boolean Whether the turtle could successfully move.
     * @return[2] string | nil The reason the turtle could not move.
     */
    function forward(): [boolean, string | null]

    /**
     * Move the turtle backwards one block.
     * ______________________________________________________________________________________________________________
     *
     * @tupleReturn
     * @return[1] boolean Whether the turtle could successfully move.
     * @return[2] string | nil The reason the turtle could not move.
     */
    function back(): [boolean, string | null]

    /**
     * Move the turtle up one block.
     * ______________________________________________________________________________________________________________
     *
     * @tupleReturn
     * @return[1] boolean Whether the turtle could successfully move.
     * @return[2] string | nil The reason the turtle could not move.
     */
    function up(): [boolean, string | null]

    /**
     * Move the turtle down one block.
     * ______________________________________________________________________________________________________________
     *
     * @tupleReturn
     * @return[1] boolean Whether the turtle could successfully move.
     * @return[2] string | nil The reason the turtle could not move.
     */
    function down(): [boolean, string | null]

    /**
     * Rotate the turtle 90 degress to the left.
     * ______________________________________________________________________________________________________________
     *
     * @tupleReturn
     * @return[1] boolean Whether the turtle could successfully turn.
     * @return[2] string | nil The reason the turtle could not turn.
     */
    function turnLeft(): [boolean, string | null]

    /**
     * Rotate the turtle 90 degress to the right.
     * ______________________________________________________________________________________________________________
     *
     * @tupleReturn
     * @return[1] boolean Whether the turtle could successfully turn.
     * @return[2] string | nil The reason the turtle could not turn.
     */
    function turnRight(): [boolean, string | null]

    /**
     * Attempt to break the block in front of the turtle.
     *
     * This requires a turtle tool capable of breaking the block. Diamond pickaxes (mining turtles) can break any vanilla block,
     * but other tools (such as axes) are more limited.
     * ______________________________________________________________________________________________________________
     * @param side? string The specific tool to use. Should be "left" or "right".
     * @tupleReturn
     * @return[1] boolean Whether a block was broken.
     * @return[2] string | nil The reason no block was broken.
     */
    function dig(side?: 'left' | 'right'): [boolean, string | null]

    /**
     * Attempt to break the block above the turtle. See {@link #getBackgroundColour() dig} for full details.
     * ______________________________________________________________________________________________________________
     * @param side? string The specific tool to use. Should be "left" or "right".
     * @tupleReturn
     * @return[1] boolean Whether a block was broken.
     * @return[2] string | nil The reason no block was broken.
     */
    function digUp(side?: 'left' | 'right'): [boolean, string | null]

    /**
     * Attempt to break the block below the turtle. See {@link #getBackgroundColour() dig} for full details.
     * ______________________________________________________________________________________________________________
     * @param side? string The specific tool to use. Should be "left" or "right".
     * @tupleReturn
     * @return[1] boolean Whether a block was broken.
     * @return[2] string | nil The reason no block was broken.
     */
    function digDown(side?: 'left' | 'right'): [boolean, string | null]

    /**
     * Place a block or item into the world in front of the turtle.
     * ______________________________________________________________________________________________________________
     * @param text? string When placing a sign, set its contents to this text.
     * @tupleReturn
     * @return[1] boolean Whether the block could be placed.
     * @return[2] string | nil The reason the block was not placed.
     */
    function place(text?: string): [boolean, string | null]

    /**
     * Place a block or item into the world above the turtle.
     * ______________________________________________________________________________________________________________
     * @param text? string When placing a sign, set its contents to this text.
     * @tupleReturn
     * @return[1] boolean Whether the block could be placed.
     * @return[2] string | nil The reason the block was not placed.
     */
    function placeUp(text?: string): [boolean, string | null]

    /**
     * Place a block or item into the world below the turtle.
     * ______________________________________________________________________________________________________________
     * @param text? string When placing a sign, set its contents to this text.
     * @tupleReturn
     * @return[1] boolean Whether the block could be placed.
     * @return[2] string | nil The reason the block was not placed.
     */
    function placeDown(text?: string): [boolean, string | null]

    /**
     * Drop the currently selected stack into the inventory in front of the turtle, or as an item into the world if there is no inventory.
     * ______________________________________________________________________________________________________________
     * @param count? number The number of items to drop. If not given, the entire stack will be dropped.
     * @tupleReturn
     * @return[1] boolean Whether items were dropped.
     * @return[2] string | nil The reason the no items were dropped.
     * @throws If dropping an invalid number of items.
     * @see #select() To select which item to drop.
     */
    function drop(count?: number): [boolean, string | null]

    /**
     * Drop the currently selected stack into the inventory above the turtle, or as an item into the world if there is no inventory.
     * ______________________________________________________________________________________________________________
     * @param count? number The number of items to drop. If not given, the entire stack will be dropped.
     * @tupleReturn
     * @return[1] boolean Whether items were dropped.
     * @return[2] string | nil The reason the no items were dropped.
     * @throws If dropping an invalid number of items.
     * @see #select() To select which item to drop.
     */
    function dropUp(count?: number): [boolean, string | null]

    /**
     * Drop the currently selected stack into the inventory in front of the turtle, or as an item into the world if there is no inventory.
     * ______________________________________________________________________________________________________________
     * @param count? number The number of items to drop. If not given, the entire stack will be dropped.
     * @tupleReturn
     * @return[1] boolean Whether items were dropped.
     * @return[2] string | nil The reason the no items were dropped.
     * @throws If dropping an invalid number of items.
     * @see #select() To select which item to drop.
     */
    function dropDown(count?: number): [boolean, string | null]

    /**
     * Change the currently selected slot.
     *
     * The selected slot is determines what slot actions like {@link #drop()} or {@link #getItemCount()} act on.
     * ______________________________________________________________________________________________________________
     * @param slot: number The slot to select.
     * @return true When the slot has been selected.
     * @throws If the slot is out of range.
     * @see #getSelectedSlot()
     */
    function select(slot: number): boolean

    /**
     * Get the number of items in the given slot.
     * ______________________________________________________________________________________________________________
     * @param slot?: number The slot we wish to check. Defaults to the {@link #select() selected slot}.
     * @return number The number of items in this slot.
     * @throws If the slot is out of range.
     */
    function getItemCount(slot?: number): number

    /**
     * Get the remaining number of items which may be stored in this stack.
     *
     * For instance, if a slot contains 13 blocks of dirt, it has room for another 51.
     * ______________________________________________________________________________________________________________
     * @param slot?: number The slot we wish to check. Defaults to the {@link #select() selected slot}.
     * @return number The space left in in this slot.
     * @throws If the slot is out of range.
     */
    function getItemCount(slot?: number): number

    /**
     * Check if there is a solid block in front of the turtle. In this case, solid refers to any non-air or liquid block.
     * ______________________________________________________________________________________________________________
     * @return boolean If there is a solid block in front.
     */
    function detect(): boolean

    /**
     * Check if there is a solid block above the turtle. In this case, solid refers to any non-air or liquid block.
     * ______________________________________________________________________________________________________________
     * @return boolean If there is a solid block above the turtle.
     */
    function detectUp(): boolean

    /**
     * Check if there is a solid block below the turtle. In this case, solid refers to any non-air or liquid block.
     * ______________________________________________________________________________________________________________
     * @return boolean If there is a solid block below the turtle.
     */
    function detectDown(): boolean

    /**
     * @return any
     */
    function compare(): any

    /**
     * @return any
     */
    function compareUp(): any

    /**
     * @return any
     */
    function compareDown(): any

    /**
     * Attack the entity in front of the turtle.
     * ______________________________________________________________________________________________________________
     * @param side? string The specific tool to use.
     * @tupleReturn
     * @return[1] boolean Whether an entity was attacked.
     * @return[2] string | nil The reason nothing was attacked.
     */
    function attack(side?: 'left' | 'right'): [boolean, string | null]

    /**
     * Attack the entity above the turtle.
     * ______________________________________________________________________________________________________________
     * @param side? string The specific tool to use.
     * @tupleReturn
     * @return[1] boolean Whether an entity was attacked.
     * @return[2] string | nil The reason nothing was attacked.
     */
    function attackUp(side?: 'left' | 'right'): [boolean, string | null]

    /**
     * Attack the entity below the turtle.
     * ______________________________________________________________________________________________________________
     * @param side? string The specific tool to use.
     * @tupleReturn
     * @return[1] boolean Whether an entity was attacked.
     * @return[2] string | nil The reason nothing was attacked.
     */
    function attackDown(side?: 'left' | 'right'): [boolean, string | null]

    /**
     * Suck an item from the inventory in front of the turtle, or from an item floating in the world.
     *
     * This will pull items into the first acceptable slot, starting at the {@link #select() currently selected} one.
     * ______________________________________________________________________________________________________________
     * @param count? number The number of items to suck. If not given, up to a stack of items will be picked up.
     * @tupleReturn
     * @return[1] boolean Whether items were picked up.
     * @return[2] string | nil The reason the no items were picked up.
     * @throws If given an invalid number of items.
     */
    function suck(count?: number): [boolean, string | null]

    /**
     * Suck an item from the inventory above the turtle, or from an item floating in the world.
     *
     * This will pull items into the first acceptable slot, starting at the {@link #select() currently selected} one.
     * ______________________________________________________________________________________________________________
     * @param count? number The number of items to suck. If not given, up to a stack of items will be picked up.
     * @tupleReturn
     * @return[1] boolean Whether items were picked up.
     * @return[2] string | nil The reason the no items were picked up.
     * @throws If given an invalid number of items.
     */
    function suckUp(count?: number): [boolean, string | null]

    /**
     * Suck an item from the inventory below the turtle, or from an item floating in the world.
     *
     * This will pull items into the first acceptable slot, starting at the {@link #select() currently selected} one.
     * ______________________________________________________________________________________________________________
     * @param count? number The number of items to suck. If not given, up to a stack of items will be picked up.
     * @tupleReturn
     * @return[1] boolean Whether items were picked up.
     * @return[2] string | nil The reason the no items were picked up.
     * @throws If given an invalid number of items.
     */
    function suckDown(count?: number): [boolean, string | null]

    /**
     * Get the turtles current fuel level
     * ______________________________________________________________________________________________________________
     * @return number remaining fuel
     */
    function getFuelLevel(): number

    /**
     * Consume fuel {@link #select() currently selected} item to refuel the turtle
     * ______________________________________________________________________________________________________________
     * @return number remaining fuel
     */
    function refuel(count?:number): number

    /**
     * @return any
     */
    function compareTo(slot:number): any

    /**
     * Attempts to transfer the {@link #select() currently selected} slot to a new slot, will not swap items.
     * ______________________________________________________________________________________________________________
     * @param[1] slot? number Slot to transfer item to
     * @param[2] count? number How many items from the selected stack to transfer to the new slot
     * @return true
     */
    function transferTo(slot:number, count?: number): true

    /**
     * Get the {@link #select() currently selected} inventory slot.
     * ______________________________________________________________________________________________________________
     * @return InventorySlot current inventory slot
     */
    function getSelectedSlot(): number

    /**
     * Get the maximum possible fuel limit.
     * ______________________________________________________________________________________________________________
     * @return number Maximum fuel limit.
     */
    function getFuelLimit(): number

    /**
     * Get the maximum possible fuel limit.
     * ______________________________________________________________________________________________________________
     * @return number Maximum fuel limit.
     */
    function getFuelLimit(): number


    /**
     * Equip an item on left side of the turtle
     *  ______________________________________________________________________________________________________________
     * @tupleReturn
     * @return[1] boolean Whether the item was equipped
     * @return[2] string | nil The reason the item was not equipped.
     */
    function equipLeft(): [boolean, string | null]


    /**
     * Equip an item on right side of the turtle
     *  ______________________________________________________________________________________________________________
     * @tupleReturn
     * @return[1] boolean Whether the item was equipped
     * @return[2] string | nil The reason the item was not equipped.
     */
    function equipRight(): [boolean, string | null]

    /**
     * Get information about the block in front of the turtle.
     *  ______________________________________________________________________________________________________________
     * @tupleReturn
     * @return[1] boolean Whether there is a block in front of the turtle.
     * @return[2] any | string Information about the block in front, or a message explaining that there is no block.
     */
    function inspect(): [boolean, string | any]

    /**
     * Get information about the block above the turtle.
     *  ______________________________________________________________________________________________________________
     * @tupleReturn
     * @return[1] boolean Whether there is a block above the turtle.
     * @return[2] any | string Information about the block above, or a message explaining that there is no block.
     */
    function inspectUp(): [boolean, string | any]

    /**
     * Get information about the block below the turtle.
     *  ______________________________________________________________________________________________________________
     * @tupleReturn
     * @return[1] boolean Whether there is a block below the turtle.
     * @return[2] any | string Information about the block below, or a message explaining that there is no block.
     */
    function inspectDown(): [boolean, string | any]

    /**
     * Get information about the block below the turtle.
     *  ______________________________________________________________________________________________________________
     * @param[1] slot? number The slot to get information about. Defaults to the selected slot.
     * @param[2] detailed? boolean Whether to include "detailed" information.
     *      When true the method will contain much more information about the item at the cost of taking longer to run.
     * @return nil | table Information about the given slot, or nil if it is empty.
     * @throws If the slot is out of range.
     * @usage Print the current slot, assuming it contains 13 dirt.
     * ```print(textutils.serialize(turtle.getItemDetail()))
     *    -- => {
     *    --  name = "minecraft:dirt",
     *    --  count = 13,
     *    -- }
     * ```
     */
    function getItemDetail(slot?: number, detailed?: boolean): null | any
}

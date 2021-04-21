"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bdsx_1 = require("bdsx");
const packets_1 = require("bdsx/bds/packets");
const nativetype_1 = require("bdsx/nativetype");
const enchantItem_1 = require("../enchantItem");
function sendMessage(player, message) {
    let packet = packets_1.TextPacket.create();
    packet.message = message;
    player.sendPacket(packet);
    packet.dispose();
}
bdsx_1.command.register('enc', 'Enchant item in specified slot').overload((param, origin) => {
    let player = origin.getEntity();
    let permissionLevel = player.getPermissionLevel();
    if (permissionLevel !== 2) {
        sendMessage(player, "You don't have permission to use this command!");
        return bdsx_1.CANCEL;
    }
    if (param.level > 32767 || param.level < -32768) {
        sendMessage(player, "Number must be <= to 32767 and >= -32768");
        return bdsx_1.CANCEL;
    }
    enchantItem_1.enchantSelectedItem(player, enchantItem_1.Enchantment[param.enchantment], param.level, true);
    sendMessage(player, "Enchanted held item successfully");
}, {
    enchantment: nativetype_1.CxxString,
    level: nativetype_1.int32_t
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5zYWZlRW5jaGFudENvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1bnNhZmVFbmNoYW50Q29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUFxRDtBQUNyRCw4Q0FBOEM7QUFDOUMsZ0RBQXFEO0FBQ3JELGdEQUFrRTtBQUVsRSxTQUFTLFdBQVcsQ0FBQyxNQUFvQixFQUFFLE9BQWU7SUFDdEQsSUFBSSxNQUFNLEdBQUcsb0JBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNqQyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNyQixDQUFDO0FBRUQsY0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLEVBQUU7SUFDaEYsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBa0IsQ0FBQztJQUNoRCxJQUFJLGVBQWUsR0FBRyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNsRCxJQUFJLGVBQWUsS0FBSyxDQUFDLEVBQUU7UUFDdkIsV0FBVyxDQUFDLE1BQU0sRUFBRSxnREFBZ0QsQ0FBQyxDQUFDO1FBQ3RFLE9BQU8sYUFBTSxDQUFDO0tBQ2pCO0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxFQUFFO1FBQzdDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsMENBQTBDLENBQUMsQ0FBQztRQUNoRSxPQUFPLGFBQU0sQ0FBQztLQUNqQjtJQUVELGlDQUFtQixDQUFDLE1BQU0sRUFBRSx5QkFBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9FLFdBQVcsQ0FBQyxNQUFNLEVBQUUsa0NBQWtDLENBQUMsQ0FBQztBQUM1RCxDQUFDLEVBQUU7SUFDQyxXQUFXLEVBQUUsc0JBQVM7SUFDdEIsS0FBSyxFQUFFLG9CQUFPO0NBQ2pCLENBQUMsQ0FBQyJ9
import { CANCEL, command, ServerPlayer } from "bdsx";
import { TextPacket } from "bdsx/bds/packets";
import { CxxString, int32_t } from "bdsx/nativetype";
import { Enchantment, enchantSelectedItem } from "../enchantItem";

function sendMessage(player: ServerPlayer, message: string) {
    let packet = TextPacket.create();
    packet.message = message;
    player.sendPacket(packet);
    packet.dispose();
}

command.register("enc", "Enchant item in specified slot").overload((param, origin)=>{
    let player = origin.getEntity() as ServerPlayer;
    let permissionLevel = player.getPermissionLevel();
    if (permissionLevel !== 2) {
        sendMessage(player, "You don't have permission to use this command!");
        return CANCEL;
    }

    if (param.level > 32767 || param.level < -32768) {
        sendMessage(player, "Number must be <= to 32767 and >= -32768");
        return CANCEL;
    }

    enchantSelectedItem(player, Enchantment[param.enchantment], param.level, true);
    sendMessage(player, "Enchanted held item successfully");
}, {
    enchantment: CxxString,
    level: int32_t
});
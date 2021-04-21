import { ServerPlayer } from "bdsx";
import { ContainerId, ItemStack } from "bdsx/bds/inventory";
import { pdb } from "bdsx/core";
import { bool_t, int16_t, int32_t } from "bdsx/nativetype";
import { ProcHacker } from "bdsx/prochacker";

const hacker = ProcHacker.load("../pdbcache.ini", ["?applyEnchant@EnchantUtils@@SA_NAEAVItemStackBase@@W4Type@Enchant@@H_N@Z"]);
pdb.close();

const enchant = hacker.js("?applyEnchant@EnchantUtils@@SA_NAEAVItemStackBase@@W4Type@Enchant@@H_N@Z", bool_t, null, ItemStack, int16_t, int32_t, bool_t);

export const Enchantment: any = {"protection":0,"fire_protection":1,"feather_falling":2,"blast_protection":3,"projectile_protection":4,"thorns":5,"respiration":6,"depth_strider":7,"aqua_affinity":8,"sharpness":9,"smite":10,"bane_of_arthropods":11,"knockback":12,"fire_aspect":13,"looting":14,"efficiency":15,"silk_touch":16,"unbreaking":17,"fortune":18,"power":19,"punch":20,"flame":21,"infinity":22,"luck_of_the_sea":23,"lure":24,"frost_walker":25,"mending":26,"binding_curse":27,"vanishing_curse":28,"impaling":29,"riptide":30,"loyalty":31,"channeling":32,"multishot":33,"piercing":34,"quick_charge":35,"soul_speed":36}


export function enchantInventoryItem(player: ServerPlayer, slot: number, container: ContainerId, enchantment: number, level: number, isUnsafe: boolean) {
    let inventory = player.getInventory();
    let item = inventory.getItem(slot, container);
    enchant(item, enchantment, level, isUnsafe);
    player.sendInventory(false);
}

export function enchantItemStack(item: ItemStack, enchantment: number, level: number, isUnsafe: boolean): ItemStack {
    enchant(item, enchantment, level, isUnsafe);
    return item;
}

export function enchantSelectedItem(player: ServerPlayer, enchantment: number, level: number, isUnsafe: boolean) {
    enchant(player.getInventory().getSelectedItem(), enchantment, level, isUnsafe);
    player.sendInventory(false);
}


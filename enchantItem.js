"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enchantSelectedItem = exports.enchantItemStack = exports.enchantInventoryItem = exports.Enchantment = void 0;
const inventory_1 = require("bdsx/bds/inventory");
const core_1 = require("bdsx/core");
const nativetype_1 = require("bdsx/nativetype");
const prochacker_1 = require("bdsx/prochacker");
const hacker = prochacker_1.ProcHacker.load('../pdbcache.ini', ['?applyEnchant@EnchantUtils@@SA_NAEAVItemStackBase@@W4Type@Enchant@@H_N@Z']);
core_1.pdb.close();
const enchant = hacker.js('?applyEnchant@EnchantUtils@@SA_NAEAVItemStackBase@@W4Type@Enchant@@H_N@Z', nativetype_1.bool_t, null, inventory_1.ItemStack, nativetype_1.int16_t, nativetype_1.int32_t, nativetype_1.bool_t);
exports.Enchantment = { "protection": 0, "fire_protection": 1, "feather_falling": 2, "blast_protection": 3, "projectile_protection": 4, "thorns": 5, "respiration": 6, "depth_strider": 7, "aqua_affinity": 8, "sharpness": 9, "smite": 10, "bane_of_arthropods": 11, "knockback": 12, "fire_aspect": 13, "looting": 14, "efficiency": 15, "silk_touch": 16, "unbreaking": 17, "fortune": 18, "power": 19, "punch": 20, "flame": 21, "infinity": 22, "luck_of_the_sea": 23, "lure": 24, "frost_walker": 25, "mending": 26, "binding_curse": 27, "vanishing_curse": 28, "impaling": 29, "riptide": 30, "loyalty": 31, "channeling": 32, "multishot": 33, "piercing": 34, "quick_charge": 35, "soul_speed": 36 };
function enchantInventoryItem(player, slot, container, enchantment, level, isUnsafe) {
    let inventory = player.getInventory();
    let item = inventory.getItem(slot, container);
    enchant(item, enchantment, level, isUnsafe);
    player.sendInventory(false);
}
exports.enchantInventoryItem = enchantInventoryItem;
function enchantItemStack(item, enchantment, level, isUnsafe) {
    enchant(item, enchantment, level, isUnsafe);
    return item;
}
exports.enchantItemStack = enchantItemStack;
function enchantSelectedItem(player, enchantment, level, isUnsafe) {
    enchant(player.getInventory().getSelectedItem(), enchantment, level, isUnsafe);
    player.sendInventory(false);
}
exports.enchantSelectedItem = enchantSelectedItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jaGFudEl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbmNoYW50SXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxrREFBNEQ7QUFDNUQsb0NBQWdDO0FBQ2hDLGdEQUEyRDtBQUMzRCxnREFBNkM7QUFFN0MsTUFBTSxNQUFNLEdBQUcsdUJBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQywwRUFBMEUsQ0FBQyxDQUFDLENBQUM7QUFDaEksVUFBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRVosTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQywwRUFBMEUsRUFBRSxtQkFBTSxFQUFFLElBQUksRUFBRSxxQkFBUyxFQUFFLG9CQUFPLEVBQUUsb0JBQU8sRUFBRSxtQkFBTSxDQUFDLENBQUM7QUFFNUksUUFBQSxXQUFXLEdBQUcsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLHVCQUF1QixFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxvQkFBb0IsRUFBQyxFQUFFLEVBQUMsV0FBVyxFQUFDLEVBQUUsRUFBQyxhQUFhLEVBQUMsRUFBRSxFQUFDLFNBQVMsRUFBQyxFQUFFLEVBQUMsWUFBWSxFQUFDLEVBQUUsRUFBQyxZQUFZLEVBQUMsRUFBRSxFQUFDLFlBQVksRUFBQyxFQUFFLEVBQUMsU0FBUyxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLGlCQUFpQixFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUMsRUFBRSxFQUFDLGNBQWMsRUFBQyxFQUFFLEVBQUMsU0FBUyxFQUFDLEVBQUUsRUFBQyxlQUFlLEVBQUMsRUFBRSxFQUFDLGlCQUFpQixFQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLFNBQVMsRUFBQyxFQUFFLEVBQUMsU0FBUyxFQUFDLEVBQUUsRUFBQyxZQUFZLEVBQUMsRUFBRSxFQUFDLFdBQVcsRUFBQyxFQUFFLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxjQUFjLEVBQUMsRUFBRSxFQUFDLFlBQVksRUFBQyxFQUFFLEVBQUMsQ0FBQTtBQUd4bUIsU0FBZ0Isb0JBQW9CLENBQUMsTUFBb0IsRUFBRSxJQUFZLEVBQUUsU0FBc0IsRUFBRSxXQUFtQixFQUFFLEtBQWEsRUFBRSxRQUFpQjtJQUFJLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1TCxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5QyxPQUFPLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBSkQsb0RBSUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxJQUFlLEVBQUUsV0FBbUIsRUFBRSxLQUFhLEVBQUUsUUFBaUI7SUFDbkcsT0FBTyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFIRCw0Q0FHQztBQUVELFNBQWdCLG1CQUFtQixDQUFDLE1BQW9CLEVBQUUsV0FBbUIsRUFBRSxLQUFhLEVBQUUsUUFBaUI7SUFDM0csT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUhELGtEQUdDIn0=
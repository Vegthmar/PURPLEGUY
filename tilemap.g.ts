// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000007060000000000000000000000000000070600000000000000000000000000000706000000000000000000000000000007060000000000000000000000000000070600000000000000000000000000000706000000000000000000000000000007060000000000000000000000000000070600000000000000000000000000000706000000000000000000000000000007060000000000000000000000000000050400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010300000000000000000000000000000706000000000001020202020202020208060000000000`, img`
. . . . . . . . . 2 2 . . . . . 
. . . . . . . . . 2 2 . . . . . 
. . . . . . . . . 2 2 . . . . . 
. . . . . . . . . 2 2 . . . . . 
. . . . . . . . . 2 2 . . . . . 
. . . . . . . . . 2 2 . . . . . 
. . . . . . . . . 2 2 . . . . . 
. . . . . . . . . 2 2 . . . . . 
. . . . . . . . . 2 2 . . . . . 
. . . . . . . . . 2 2 . . . . . 
. . . . . . . . . 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 2 2 . . . . . 
. . . . . . . . . 2 2 . . . . . 
2 2 2 2 2 2 2 2 2 2 2 . . . . . 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenInnerSouthEast], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

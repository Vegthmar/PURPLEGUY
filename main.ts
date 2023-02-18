mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Purple Guy`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`Error_Block`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
    . . . . . a a a a a . . . . . 
    . . . . a a a a a a a . . . . 
    . . . a 9 9 9 9 9 9 9 a . . . 
    . . a 9 f f 1 1 1 f f 9 a . . 
    . . a 9 f f f 1 f f f 9 a . . 
    . . a 9 1 f f 1 f f 1 9 a . . 
    . a 9 f 1 1 1 1 1 1 1 f 9 a . 
    a 9 f 1 1 1 1 f 1 1 1 1 f 9 a 
    a 9 f f 1 1 f 1 f 1 1 f f 9 a 
    . a 9 f f 1 1 1 1 1 f f 9 a . 
    . . a 9 9 1 f 1 f 1 9 9 a . . 
    . . . a 9 f f f f f 9 a . . . 
    . . . 2 a 9 9 9 9 9 a 2 . . . 
    . . 2 4 2 a a a a a 2 4 2 . . 
    . 2 5 4 5 4 2 2 2 4 5 4 5 2 . 
    . . 2 5 5 4 4 4 4 4 5 5 2 . . 
    . . . 2 2 5 5 5 5 5 2 2 . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(assets.image`Tank`, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 0)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 80, 0)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three), 50, 50)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four), 40, 0)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).ay = 600
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).ay = 600
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).ay = 600
scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
tiles.setCurrentTilemap(tilemap`level1`)
music.play(music.stringPlayable("C5 B A B G D C E ", 120), music.PlaybackMode.UntilDone)

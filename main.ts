mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    if (mp.playerSelector(mp.PlayerNumber.One) == player2) {
        Purple_Guy_Right_Shot = sprites.createProjectileFromSprite(img`
            f f 1 1 . . 
            5 5 f f 1 . 
            5 5 5 5 f 1 
            5 5 f f 1 . 
            f f 1 1 . . 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 80, -25)
        Purple_Guy_Left_Shot = sprites.createProjectileFromSprite(img`
            . . 1 1 f f 
            . 1 f f 5 5 
            1 f 5 5 5 5 
            . 1 f f 5 5 
            . . 1 1 f f 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -80, -25)
        pause(1000)
    }
    if (mp.playerSelector(mp.PlayerNumber.Two) == player2) {
        Glitch = sprites.createProjectileFromSprite(img`
            2 a 2 3 9 4 
            5 9 e a 2 9 
            4 3 4 5 3 a 
            3 a e 9 2 4 
            a 2 2 a 9 e 
            5 9 4 3 a 2 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 25, 25)
        Glitch = sprites.createProjectileFromSprite(img`
            2 a 2 3 9 4 
            5 9 e a 2 9 
            4 3 4 5 3 a 
            3 a e 9 2 4 
            a 2 2 a 9 e 
            5 9 4 3 a 2 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), -25, -25)
        Glitch = sprites.createProjectileFromSprite(img`
            2 a 2 3 9 4 
            5 9 e a 2 9 
            4 3 4 5 3 a 
            3 a e 9 2 4 
            a 2 2 a 9 e 
            5 9 4 3 a 2 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 25, -25)
        Glitch = sprites.createProjectileFromSprite(img`
            2 a 2 3 9 4 
            5 9 e a 2 9 
            4 3 4 5 3 a 
            3 a e 9 2 4 
            a 2 2 a 9 e 
            5 9 4 3 a 2 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), -25, 25)
        Glitch = sprites.createProjectileFromSprite(img`
            2 a 2 3 9 4 
            5 9 e a 2 9 
            4 3 4 5 3 a 
            3 a e 9 2 4 
            a 2 2 a 9 e 
            5 9 4 3 a 2 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), -25, 0)
        Glitch = sprites.createProjectileFromSprite(img`
            2 a 2 3 9 4 
            5 9 e a 2 9 
            4 3 4 5 3 a 
            3 a e 9 2 4 
            a 2 2 a 9 e 
            5 9 4 3 a 2 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 25, 0)
        Glitch = sprites.createProjectileFromSprite(img`
            2 a 2 3 9 4 
            5 9 e a 2 9 
            4 3 4 5 3 a 
            3 a e 9 2 4 
            a 2 2 a 9 e 
            5 9 4 3 a 2 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 0, 25)
        Glitch = sprites.createProjectileFromSprite(img`
            2 a 2 3 9 4 
            5 9 e a 2 9 
            4 3 4 5 3 a 
            3 a e 9 2 4 
            a 2 2 a 9 e 
            5 9 4 3 a 2 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 0, -25)
        pause(3000)
    }
    if (mp.playerSelector(mp.PlayerNumber.Three) == player2) {
        Bomb = sprites.createProjectileFromSprite(assets.image`Bomb`, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), 0, 75)
        pause(500)
    }
    if (mp.playerSelector(mp.PlayerNumber.Four) == player2) {
        Tank_Shot = sprites.createProjectileFromSprite(assets.image`Nine_Eleven_Nuke`, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), 150, 0)
        pause(5000)
    }
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (Bomb == sprite) {
        sprites.destroy(sprite, effects.fire, 2000)
    }
    if (Glitch == sprite) {
        sprites.destroy(sprite, effects.disintegrate, 5000)
    }
    if (Purple_Guy_Right_Shot == sprite) {
        Purple_Guy_WarpHole_Right = sprites.createProjectileFromSprite(img`
            . . . b b b b b b b b b b . . . 
            . . b c c c c c c c c c c b . . 
            . b c f f f f f f f f f f c b . 
            b c f f f f a a a a a f f f c b 
            b c f f f a f f f f a a f f c b 
            b c f f a f f a a a f a a f c b 
            b c f f a f a a f a a f a f c b 
            b c f f a f a f f f a f a f c b 
            b c f f a f a f a a f a f f c b 
            b c f f a f a a a a f a f f c b 
            b c f f a f f a a f f a f f c b 
            b c f f f a a a a a a f f f c b 
            b c f f f f f f f f f f f f c b 
            . b c f f f f f f f f f f c b . 
            . . b c c c c c c c c c c b . . 
            . . . b b b b b b b b b b . . . 
            `, Purple_Guy_Right_Shot, 0, 0)
        sprites.destroy(sprite, effects.none, 5000)
        sprites.destroy(Purple_Guy_WarpHole_Right, effects.starField, 5000)
    }
    if (Purple_Guy_Left_Shot == sprite) {
        Purple_Guy_WarpHole_Left = sprites.createProjectileFromSprite(img`
            . . . b b b b b b b b b b . . . 
            . . b c c c c c c c c c c b . . 
            . b c f f f f f f f f f f c b . 
            b c f f f f a a a a a f f f c b 
            b c f f f a f f f f a a f f c b 
            b c f f a f f a a a f a a f c b 
            b c f f a f a a f a a f a f c b 
            b c f f a f a f f f a f a f c b 
            b c f f a f a f a a f a f f c b 
            b c f f a f a a a a f a f f c b 
            b c f f a f f a a f f a f f c b 
            b c f f f a a a a a a f f f c b 
            b c f f f f f f f f f f f f c b 
            . b c f f f f f f f f f f c b . 
            . . b c c c c c c c c c c b . . 
            . . . b b b b b b b b b b . . . 
            `, Purple_Guy_Left_Shot, 0, 0)
        sprites.destroy(sprite, effects.none, 5000)
        sprites.destroy(Purple_Guy_WarpHole_Left, effects.starField, 100)
    }
})
let Purple_Guy_WarpHole_Left: Sprite = null
let Purple_Guy_WarpHole_Right: Sprite = null
let Tank_Shot: Sprite = null
let Bomb: Sprite = null
let Glitch: Sprite = null
let Purple_Guy_Left_Shot: Sprite = null
let Purple_Guy_Right_Shot: Sprite = null
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

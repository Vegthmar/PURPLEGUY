namespace SpriteKind {
    export const Health_Boost = SpriteKind.create()
    export const Baby_Bomb = SpriteKind.create()
}
namespace StatusBarKind {
    export const BabyBomb_Health = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Void_Death`, function (sprite, location) {
    Group_Health.value += -1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Baby_Bomb, function (sprite, otherSprite) {
    if (sprite == Purple_Guy_Right_Shot) {
        sprites.destroy(Purple_Guy_WarpHole_Right, effects.starField, 100)
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
        sprites.destroy(sprite, effects.none, 500)
    }
    if (sprite == Purple_Guy_Left_Shot) {
        sprites.destroy(Purple_Guy_Left_Shot, effects.starField, 100)
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
        sprites.destroy(sprite, effects.none, 500)
    }
    if (sprite == Purple_Guy_WarpHole_Left) {
        sprites.destroy(otherSprite, effects.coolRadial, 500)
    }
    if (sprite == Purple_Guy_WarpHole_Right) {
        sprites.destroy(otherSprite, effects.coolRadial, 500)
    }
    if (sprite == Glitch_1) {
        sprites.destroy(otherSprite, effects.rings, 500)
        sprites.destroy(sprite, effects.disintegrate, 500)
    }
    if (sprite == Glitch_2) {
        sprites.destroy(otherSprite, effects.rings, 500)
        sprites.destroy(sprite, effects.disintegrate, 500)
    }
    if (sprite == Glitch_3) {
        sprites.destroy(otherSprite, effects.rings, 500)
        sprites.destroy(sprite, effects.disintegrate, 500)
    }
    if (sprite == Glitch_4) {
        sprites.destroy(otherSprite, effects.rings, 500)
        sprites.destroy(sprite, effects.disintegrate, 500)
    }
    if (sprite == Glitch_5) {
        sprites.destroy(otherSprite, effects.rings, 500)
        sprites.destroy(sprite, effects.disintegrate, 500)
    }
    if (sprite == Glitch_6) {
        sprites.destroy(otherSprite, effects.rings, 500)
        sprites.destroy(sprite, effects.disintegrate, 500)
    }
    if (sprite == Bomb) {
        sprites.destroy(otherSprite, effects.rings, 500)
    }
    if (sprite == Tank_Shot) {
        sprites.destroy(otherSprite, effects.rings, 500)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Health_Boost, function (sprite, otherSprite) {
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))) {
        Group_Health.value += 100
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        sprites.destroy(otherSprite, effects.hearts, 2000)
        game.splash("Health-Up")
    } else {
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    if (mp.playerSelector(mp.PlayerNumber.One) == player2) {
        Purple_Guy_Right_Shot = sprites.createProjectileFromSprite(img`
            f f 1 1 . . 
            5 5 f f 1 . 
            5 5 5 5 f 1 
            5 5 f f 1 . 
            f f 1 1 . . 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 80, 25)
        Purple_Guy_Left_Shot = sprites.createProjectileFromSprite(img`
            . . 1 1 f f 
            . 1 f f 5 5 
            1 f 5 5 5 5 
            . 1 f f 5 5 
            . . 1 1 f f 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -80, 25)
        pause(1000)
    }
    if (mp.playerSelector(mp.PlayerNumber.Two) == player2) {
        Glitch_1 = sprites.createProjectileFromSprite(img`
            2 a 2 3 9 4 
            5 9 e a 2 9 
            4 3 4 5 3 a 
            3 a e 9 2 4 
            a 2 2 a 9 e 
            5 9 4 3 a 2 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 25, 25)
        Glitch_2 = sprites.createProjectileFromSprite(img`
            2 a 2 3 9 4 
            5 9 e a 2 9 
            4 3 4 5 3 a 
            3 a e 9 2 4 
            a 2 2 a 9 e 
            5 9 4 3 a 2 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), -25, -25)
        Glitch_3 = sprites.createProjectileFromSprite(img`
            2 a 2 3 9 4 
            5 9 e a 2 9 
            4 3 4 5 3 a 
            3 a e 9 2 4 
            a 2 2 a 9 e 
            5 9 4 3 a 2 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 25, -25)
        Glitch_4 = sprites.createProjectileFromSprite(img`
            2 a 2 3 9 4 
            5 9 e a 2 9 
            4 3 4 5 3 a 
            3 a e 9 2 4 
            a 2 2 a 9 e 
            5 9 4 3 a 2 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), -25, 25)
        Glitch_5 = sprites.createProjectileFromSprite(img`
            2 a 2 3 9 4 
            5 9 e a 2 9 
            4 3 4 5 3 a 
            3 a e 9 2 4 
            a 2 2 a 9 e 
            5 9 4 3 a 2 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), -25, 0)
        Glitch_6 = sprites.createProjectileFromSprite(img`
            2 a 2 3 9 4 
            5 9 e a 2 9 
            4 3 4 5 3 a 
            3 a e 9 2 4 
            a 2 2 a 9 e 
            5 9 4 3 a 2 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 25, 0)
        Glitch_7 = sprites.createProjectileFromSprite(img`
            2 a 2 3 9 4 
            5 9 e a 2 9 
            4 3 4 5 3 a 
            3 a e 9 2 4 
            a 2 2 a 9 e 
            5 9 4 3 a 2 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 0, 25)
        pause(3000)
    }
    if (mp.playerSelector(mp.PlayerNumber.Three) == player2) {
        Bomb = sprites.createProjectileFromSprite(assets.image`Bomb`, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), 0, 75)
        pause(500)
    }
    if (mp.playerSelector(mp.PlayerNumber.Four) == player2) {
        Tank_Shot = sprites.createProjectileFromSprite(assets.image`Nine_Eleven_Nuke`, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), 150, 0)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprite == Tank_Shot) {
        if (otherSprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four))) {
            Group_Health.value += 0
        } else if (otherSprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
            Group_Health.value += -5
        } else if (otherSprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))) {
            Group_Health.value += -5
        } else if (otherSprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three))) {
            Group_Health.value += -5
        }
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (Bomb == sprite) {
        sprites.destroy(sprite, effects.fire, 2000)
    }
    if (Glitch_1 == sprite) {
        sprites.destroy(sprite, effects.ashes, 2000)
    }
    if (Purple_Guy_Right_Shot == sprite) {
        sprites.destroy(Purple_Guy_WarpHole_Right, effects.starField, 100)
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
        sprites.destroy(sprite, effects.none, 500)
    }
    if (Purple_Guy_Left_Shot == sprite) {
        sprites.destroy(Purple_Guy_WarpHole_Left, effects.starField, 100)
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
        sprites.destroy(sprite, effects.none, 500)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player2) {
    if (mp.playerSelector(mp.PlayerNumber.One) == player2) {
        if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy == 0) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy = -200
        }
    }
    if (mp.playerSelector(mp.PlayerNumber.Two) == player2) {
        if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vy == 0) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vy = -250
        }
    }
    if (mp.playerSelector(mp.PlayerNumber.Four) == player2) {
        if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).vy == 0) {
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).vy = -200
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Baby_Bomb, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    Group_Health.value += -75
    sprites.destroy(otherSprite, effects.fire, 500)
})
let Glitch_7: Sprite = null
let Tank_Shot: Sprite = null
let Bomb: Sprite = null
let Glitch_6: Sprite = null
let Glitch_5: Sprite = null
let Glitch_4: Sprite = null
let Glitch_3: Sprite = null
let Glitch_2: Sprite = null
let Glitch_1: Sprite = null
let Purple_Guy_WarpHole_Left: Sprite = null
let Purple_Guy_Left_Shot: Sprite = null
let Purple_Guy_WarpHole_Right: Sprite = null
let Purple_Guy_Right_Shot: Sprite = null
let BombEnemy: Sprite = null
let Health_Boost: Sprite = null
let Group_Health: StatusBarSprite = null
Group_Health = statusbars.create(150, 4, StatusBarKind.Health)
Group_Health.positionDirection(CollisionDirection.Top)
Group_Health.max = 300
Group_Health.value = 100
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Purple Guy`, SpriteKind.Player))
let Player_1_Shot_Level = 0
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`Error_Block`, SpriteKind.Player))
let Player_2_Shot_Level = 0
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
let Player_3_Shot_Level = 0
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(assets.image`Tank`, SpriteKind.Player))
let Player_4_Shot_Level = 0
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 90, 0)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 80, 0)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three), 75, 75)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four), 100, 0)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).ay = 600
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).ay = 600
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).ay = 600
scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
tiles.setCurrentTilemap(tilemap`level1`)
music.play(music.stringPlayable("C5 B A B G D C E ", 120), music.PlaybackMode.UntilDone)
for (let value of tiles.getTilesByType(assets.tile`Health Boost`)) {
    Health_Boost = sprites.create(assets.image`Health_Boost_Image`, SpriteKind.Health_Boost)
    animation.runImageAnimation(
    Health_Boost,
    assets.animation`Health_Boost_Animation`,
    300,
    true
    )
    tiles.placeOnTile(Health_Boost, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`BomyTile`)) {
    BombEnemy = sprites.create(assets.image`Bomb_Image`, SpriteKind.Baby_Bomb)
    animation.runImageAnimation(
    BombEnemy,
    assets.animation`Bomb-Enemy-Idle`,
    150,
    true
    )
    tiles.placeOnTile(BombEnemy, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`Purple Guy`)
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vx < 0) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).image.flipX()
    }
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy < 0) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`Purple Guy`)
    } else if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy > 0) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`Purple Guy`)
    } else {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`Purple Guy`)
    }
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vx < 0) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).image.flipX()
    }
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setImage(assets.image`Error_Block`)
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vx < 0) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).image.flipX()
    }
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vy < 0) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).image.flipY()
    } else if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vy > 0) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).image.flipX()
    } else {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setImage(assets.image`Error_Block`)
    }
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vx < 0) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).image.flipX()
    }
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setImage(assets.image`Tank`)
})

namespace SpriteKind {
    export const Enemy2 = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
    export const Evil = SpriteKind.create()
    export const Ranger = SpriteKind.create()
    export const Enemy4 = SpriteKind.create()
    export const Enemy5 = SpriteKind.create()
    export const Enemy6 = SpriteKind.create()
    export const Amulet = SpriteKind.create()
}
function Spawn_Hopni () {
    myEnemy = sprites.create(assets.image`Honi`, SpriteKind.Enemy3)
    statusbar = statusbars.create(11, 1, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(myEnemy)
    statusbar.setColor(0, 0)
    myEnemy.ay = 256
    myEnemy.vx = -30
    characterAnimations.loopFrames(
    myEnemy,
    assets.animation`Honi_Right`,
    70,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    myEnemy,
    assets.animation`Honi_Left`,
    70,
    characterAnimations.rule(Predicate.MovingLeft)
    )
}
function Spawn_Roni () {
    myEnemy = sprites.create(assets.image`Oni`, SpriteKind.Enemy2)
    statusbar = statusbars.create(11, 1, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(myEnemy)
    statusbar.setColor(0, 0)
    myEnemy.ay = 256
    myEnemy.vx = -40
    characterAnimations.loopFrames(
    myEnemy,
    assets.animation`Roni_Left`,
    64,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    myEnemy,
    assets.animation`Roni_Right`,
    64,
    characterAnimations.rule(Predicate.MovingRight)
    )
}
function Spawn_Hollow_Oni () {
    myEnemy = sprites.create(assets.image`Hollow_Demon`, SpriteKind.Enemy6)
    statusbar = statusbars.create(17, 1, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(myEnemy)
    statusbar.setColor(0, 0)
    myEnemy.ay = 256
    myEnemy.vx = -50
    characterAnimations.loopFrames(
    myEnemy,
    assets.animation`Hollow_Left`,
    64,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    myEnemy,
    assets.animation`Hollow_Right`,
    64,
    characterAnimations.rule(Predicate.MovingRight)
    )
}
function Attack () {
    if (Sliding == false) {
        if (Can_Attack == true) {
            Can_Attack = false
            if (Weapon == 0) {
                music.play(music.createSoundEffect(WaveShape.Sine, 693, 417, 255, 0, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
                if (Direction == 1) {
                    projectile = sprites.createProjectileFromSprite(assets.image`Kunai_Right`, mySprite, 256, 0)
                    animation.runImageAnimation(
                    projectile,
                    assets.animation`Slash_Right`,
                    64,
                    false
                    )
                } else if (Direction == 2) {
                    projectile = sprites.createProjectileFromSprite(assets.image`Kunai_Left`, mySprite, -256, 0)
                    animation.runImageAnimation(
                    projectile,
                    assets.animation`Slash_Left`,
                    64,
                    false
                    )
                }
                timer.after(164, function () {
                    Can_Attack = true
                })
            } else if (Weapon == 1) {
                music.play(music.createSoundEffect(WaveShape.Sine, 598, 468, 255, 46, 200, SoundExpressionEffect.Tremolo, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
                if (Direction == 1) {
                    projectile = sprites.createProjectileFromSprite(assets.image`Kunai_Right`, mySprite, 111, 1)
                    animation.runImageAnimation(
                    projectile,
                    assets.animation`Shuriken_Right`,
                    70,
                    false
                    )
                } else if (Direction == 2) {
                    projectile = sprites.createProjectileFromSprite(assets.image`Kunai_Left`, mySprite, -111, 1)
                    animation.runImageAnimation(
                    projectile,
                    assets.animation`Shuriken_Left`,
                    70,
                    false
                    )
                }
                extraEffects.createSpreadEffectOnAnchor(projectile, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), 1900, 1, 10)
                timer.after(256, function () {
                    Can_Attack = true
                })
            }
        } else if (Weapon == 2) {
            music.play(music.createSoundEffect(WaveShape.Sine, 693, 417, 255, 0, 256, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            if (Direction == 1) {
                projectile = sprites.createProjectileFromSprite(assets.image`Kunai_Right`, mySprite, 256, 0)
                animation.runImageAnimation(
                projectile,
                assets.animation`Great_Slash_Right`,
                100,
                false
                )
                controller.moveSprite(mySprite, 0, 0)
                mySprite.vx = -50
                characterAnimations.setCharacterAnimationsEnabled(mySprite, false)
                timer.after(80, function () {
                    characterAnimations.setCharacterAnimationsEnabled(mySprite, true)
                    Direction = 1
                    mySprite.vx = 0
                    controller.moveSprite(mySprite, 56, 0)
                })
            } else if (Direction == 2) {
                projectile = sprites.createProjectileFromSprite(assets.image`Kunai_Left`, mySprite, -256, 0)
                animation.runImageAnimation(
                projectile,
                assets.animation`Great_Slash_Left`,
                100,
                false
                )
                controller.moveSprite(mySprite, 0, 0)
                mySprite.vx = 50
                characterAnimations.setCharacterAnimationsEnabled(mySprite, false)
                timer.after(80, function () {
                    characterAnimations.setCharacterAnimationsEnabled(mySprite, true)
                    Direction = 2
                    mySprite.vx = 0
                    controller.moveSprite(mySprite, 56, 0)
                })
            }
            timer.after(333, function () {
                Can_Attack = true
            })
        } else if (Weapon == 3) {
            music.play(music.createSoundEffect(WaveShape.Sine, 566, 501, 255, 0, 200, SoundExpressionEffect.Tremolo, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            if (Direction == 1) {
                projectile = sprites.createProjectileFromSprite(assets.image`Kunai_Right`, mySprite, 151, 5)
            } else if (Direction == 2) {
                projectile = sprites.createProjectileFromSprite(assets.image`Kunai_Left`, mySprite, -151, 5)
            }
            projectile.setFlag(SpriteFlag.DestroyOnWall, false)
            projectile.setBounceOnWall(true)
            extraEffects.createSpreadEffectOnAnchor(projectile, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), 2256, 1, 20)
            timer.after(200, function () {
                Can_Attack = true
            })
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    mySprite.setKind(SpriteKind.Food)
    Enemy_Lock = 1
    blockSettings.writeNumber("Save", 1)
    timer.after(365, function () {
        tileUtil.replaceAllTiles(assets.tile`myTile1`, assets.tile`myTile0`)
        tileUtil.setWalls(assets.tile`myTile0`, true)
        Spawn_Roni()
        tiles.placeOnTile(myEnemy, tiles.getTileLocation(168, 11))
        timer.after(256, function () {
            tileUtil.centerCameraOnTile(tiles.getTileLocation(162, 7))
            timer.after(555, function () {
                mySprite.setKind(SpriteKind.Player)
            })
        })
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Respawn4`, function (sprite, location) {
    blockSettings.writeNumber("Save", 8)
    Clear()
    The_ENd()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy4, function (sprite, otherSprite) {
    if (Weapon == 2) {
        if (sprite.vy > 0) {
            Recoil()
        }
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -100
    } else if (Weapon == 2) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
    } else {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -34
    }
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value == 0) {
        Ranger_Active = false
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Explosion), 64, 15, 15)
        sprites.destroy(otherSprite)
    }
    if (Weapon != 3) {
        effects.clearParticles(sprite)
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 10, 10, 8)
        sprites.destroy(sprite)
    }
})
function Spawn_Zoni () {
    myEnemy = sprites.create(assets.image`Oni`, SpriteKind.Enemy5)
    statusbar = statusbars.create(13, 1, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(myEnemy)
    statusbar.setColor(0, 0)
    myEnemy.ay = 256
    myEnemy.vx = -48
    characterAnimations.loopFrames(
    myEnemy,
    assets.animation`Zoni_Left`,
    80,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    myEnemy,
    assets.animation`Zoni_Right`,
    80,
    characterAnimations.rule(Predicate.MovingRight)
    )
}
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`Fire2`, function (sprite, location) {
    Recoil()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Evil, function (sprite, otherSprite) {
    mySprite.setKind(SpriteKind.Food)
    info.changeLifeBy(-1)
    Take_Damage()
    extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Explosion), 64, 10, 12)
    timer.after(365, function () {
        mySprite.setKind(SpriteKind.Player)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    blockSettings.writeNumber("Save", 3)
    Enemy_Lock = 0
    Clear()
    The_Hollow()
})
sprites.onDestroyed(SpriteKind.Enemy3, function (sprite) {
    Spirit_Charge += 1
    Enemy_Lock += 1
})
function Take_Damage () {
    scene.cameraShake(5, 256)
    color.setColor(1, color.parseColorString("FD811C"), 256)
    timer.after(256, function () {
        color.setColor(1, color.parseColorString("CCFFF9"), 256)
    })
}
function Clear () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy3)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy4)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy5)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy6)
    sprites.destroyAllSpritesOfKind(SpriteKind.Evil)
}
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`Fire1`, function (sprite, location) {
    Recoil()
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`Enemy_Right0`, function (sprite, location) {
    sprite.vx = 30
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Fire2`, function (sprite, location) {
    mySprite.setKind(SpriteKind.Food)
    info.changeLifeBy(-1)
    Take_Damage()
    tiles.placeOnRandomTile(mySprite, assets.tile`Respawn3`)
    timer.after(256, function () {
        mySprite.setKind(SpriteKind.Player)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile60`, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(23, 7))
        if (Spoke == false) {
            game.showLongText("Great danger lies ahead...", DialogLayout.Top)
            game.showLongText("You better be in top shape for this danger.", DialogLayout.Top)
            game.showLongText("Take this:", DialogLayout.Top)
            game.showLongText("You got Spirt Energy!", DialogLayout.Top)
            Spirit_Charge += 6
            Spoke = true
        } else {
            game.showLongText("Good luck.", DialogLayout.Top)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Fire1`, function (sprite, location) {
    mySprite.setKind(SpriteKind.Food)
    info.changeLifeBy(-1)
    Take_Damage()
    tiles.placeOnRandomTile(mySprite, assets.tile`Respawn2`)
    timer.after(256, function () {
        mySprite.setKind(SpriteKind.Player)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy3, function (sprite, otherSprite) {
    mySprite.setKind(SpriteKind.Food)
    if (Ground_Pound == true) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -40
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 10, 10, 8)
    } else {
        info.changeLifeBy(-1)
        Take_Damage()
    }
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value == 0) {
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Explosion), 64, 12, 12)
        sprites.destroy(otherSprite)
    }
    timer.after(388, function () {
        mySprite.setKind(SpriteKind.Player)
    })
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    Cancel()
})
scene.onOverlapTile(SpriteKind.Enemy5, assets.tile`Enemy_Right0`, function (sprite, location) {
    sprite.vx = 48
})
function Start () {
    if (blockSettings.readNumber("Save") == 1) {
        The_Begining()
        tiles.placeOnTile(mySprite, tiles.getTileLocation(147, 9))
    } else if (blockSettings.readNumber("Save") == 2) {
        The_Begining()
        tileUtil.replaceAllTiles(assets.tile`myTile1`, assets.tile`transparency16`)
        Spirit_Charge = 6
        tiles.placeOnTile(mySprite, tiles.getTileLocation(162, 12))
    } else if (blockSettings.readNumber("Save") == 3) {
        The_Hollow()
        Spirit_Charge = 7
    } else if (blockSettings.readNumber("Save") == 4) {
        The_Hollow()
        Spirit_Charge = 7
        tiles.placeOnTile(mySprite, tiles.getTileLocation(138, 8))
    } else if (blockSettings.readNumber("Save") == 5) {
        The_Voyage()
        Spirit_Charge = 4
    } else if (blockSettings.readNumber("Save") == 6) {
        The_Voyage()
        tileUtil.replaceAllTiles(assets.tile`myTile12`, assets.tile`transparency16`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(39, 8))
        Spirit_Charge = 8
    } else if (blockSettings.readNumber("Save") == 7) {
        The_Temple()
        Spirit_Charge = 8
    } else if (blockSettings.readNumber("Save") == 8) {
        The_ENd()
        Spirit_Charge = 10
    } else {
        The_Begining()
        blockSettings.writeNumber("Save", 0)
    }
    if (blockSettings.readNumber("Save") >= 6) {
        Weapons_Unlocked = 1
        tileUtil.replaceAllTiles(assets.tile`myTile60`, assets.tile`myTile9`)
    }
}
scene.onOverlapTile(SpriteKind.Enemy5, assets.tile`Enemy_Left`, function (sprite, location) {
    sprite.vx = -48
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy5, function (sprite, otherSprite) {
    if (Weapon == 2) {
        if (sprite.vy > 0) {
            Recoil()
        }
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -14
    } else if (Weapon == 3) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -5
    } else {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -8
    }
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value == 0) {
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Explosion), 64, 17, 17)
        sprites.destroy(otherSprite)
    }
    if (Weapon != 3) {
        effects.clearParticles(sprite)
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 10, 10, 8)
        sprites.destroy(sprite)
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Weapons_Unlocked == 1) {
        Weapon += 1
        if (Weapon >= 2) {
            Weapon = 0
        }
    } else if (Weapons_Unlocked == 2) {
        Weapon += 1
        if (Weapon >= 3) {
            Weapon = 0
        }
    } else if (Weapons_Unlocked == 3) {
        Weapon += 1
        if (Weapon >= 4) {
            Weapon = 0
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy3, function (sprite, otherSprite) {
    if (Weapon == 2) {
        if (sprite.vy > 0) {
            Recoil()
        }
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -100
    } else if (Weapon == 3) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -18
    } else {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -34
    }
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value == 0) {
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Explosion), 64, 12, 15)
        sprites.destroy(otherSprite)
    }
    if (Weapon != 3) {
        effects.clearParticles(sprite)
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 10, 10, 8)
        sprites.destroy(sprite)
    }
})
scene.onHitWall(SpriteKind.Enemy3, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = 35
    } else if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = -35
    } else if (sprite.isHittingTile(CollisionDirection.Bottom)) {
        sprite.vy = -80
    }
})
scene.onOverlapTile(SpriteKind.Enemy2, assets.tile`Enemy_Left`, function (sprite, location) {
    sprite.vx = -40
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    mySprite.setKind(SpriteKind.Food)
    Enemy_Lock = 1
    timer.after(365, function () {
        tileUtil.replaceAllTiles(assets.tile`myTile15`, assets.tile`myTile14`)
        tileUtil.replaceAllTiles(assets.tile`myTile12`, assets.tile`myTile0`)
        tileUtil.replaceAllTiles(assets.tile`myTile60`, assets.tile`myTile9`)
        tileUtil.setWalls(assets.tile`myTile0`, true)
        Spawn_Oni()
        tiles.placeOnTile(myEnemy, tiles.getTileLocation(45, 9))
        Spawn_Oni()
        tiles.placeOnTile(myEnemy, tiles.getTileLocation(39, 7))
        Spawn_Oni()
        tiles.placeOnTile(myEnemy, tiles.getTileLocation(33, 9))
        timer.after(256, function () {
            tileUtil.centerCameraOnTile(tiles.getTileLocation(39, 7))
            timer.after(555, function () {
                mySprite.setKind(SpriteKind.Player)
            })
        })
    })
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.image != assets.image`Lorn_Low`) {
        Attack()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 13))
        game.showLongText("Ah my back hurts...", DialogLayout.Top)
        game.showLongText("Oh, why hello there.", DialogLayout.Top)
        game.showLongText("You're going to retrieve the", DialogLayout.Top)
        game.showLongText("Void Amulet?", DialogLayout.Top)
        game.showLongText("I wish you good luck on your journey.", DialogLayout.Top)
    }
})
function Recoil () {
    if (Weapon == 2) {
        mySprite.vy = -202
        characterAnimations.setCharacterAnimationsEnabled(mySprite, false)
        timer.after(80, function () {
            mySprite.vy = 0
            characterAnimations.setCharacterAnimationsEnabled(mySprite, true)
        })
    }
}
sprites.onDestroyed(SpriteKind.Enemy4, function (sprite) {
    Spirit_Charge += 1
    Enemy_Lock += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Save`, function (sprite, location) {
    blockSettings.writeNumber("Save", 4)
    Enemy_Lock = 0
})
function Jump () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        if (mySprite.vx == 45 || mySprite.vx == -45) {
            mySprite.vy = -95
        } else {
            mySprite.vy = -80
        }
        Float = true
    } else if (Float == true) {
        mySprite.vy = -55
        Float = false
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Jump()
})
sprites.onDestroyed(SpriteKind.Enemy2, function (sprite) {
    Spirit_Charge += 2
    Enemy_Lock += 2
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Spectral_Tile41`, function (sprite, location) {
    tileUtil.replaceAllTiles(assets.tile`Invisible_Chest`, assets.tile`Spirit_Chest1`)
    tileUtil.replaceAllTiles(assets.tile`Spectral_Tile41`, assets.tile`Spectral_Tile30`)
})
function Spawn_Oni () {
    myEnemy = sprites.create(assets.image`Oni`, SpriteKind.Enemy)
    statusbar = statusbars.create(11, 1, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(myEnemy)
    statusbar.setColor(0, 0)
    myEnemy.ay = 256
    myEnemy.vx = -35
    characterAnimations.loopFrames(
    myEnemy,
    assets.animation`Oni_Left`,
    50,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    myEnemy,
    assets.animation`Oni_RIght`,
    50,
    characterAnimations.rule(Predicate.MovingRight)
    )
}
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = 30
    } else if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = -30
    }
})
scene.onOverlapTile(SpriteKind.Enemy2, assets.tile`Enemy_Right0`, function (sprite, location) {
    sprite.vx = 40
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy6, function (sprite, otherSprite) {
    if (Weapon == 2) {
        if (sprite.vy > 0) {
            Recoil()
        }
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -8
    } else if (Weapon == 3) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
    } else {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -5
    }
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value == 0) {
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Explosion), 64, 30, 25)
        sprites.destroy(otherSprite)
        timer.after(555, function () {
            game.splash("THE END")
            blockSettings.writeNumber("Save", 0)
            game.reset()
        })
    }
    if (Weapon != 3) {
        effects.clearParticles(sprite)
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 10, 12, 10)
        sprites.destroy(sprite)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile59`, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(132, 9))
        game.showLongText("Greetings young traveler!", DialogLayout.Top)
        game.showLongText("I just wanted to let you know that there have been reports of a powerful Oni", DialogLayout.Top)
        game.showLongText("in this area.", DialogLayout.Top)
        game.showLongText("Stay safe.", DialogLayout.Top)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy6, function (sprite, otherSprite) {
    mySprite.setKind(SpriteKind.Food)
    if (Ground_Pound == true) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -7
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 10, 12, 10)
    } else {
        info.changeLifeBy(-3)
        Take_Damage()
    }
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value == 0) {
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Explosion), 64, 30, 25)
        sprites.destroy(otherSprite)
        timer.after(555, function () {
            game.splash("THE END")
            blockSettings.writeNumber("Save", 0)
            game.reset()
        })
    }
    timer.after(555, function () {
        mySprite.setKind(SpriteKind.Player)
    })
})
function The_ENd () {
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level55`))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(10, 1))
    Spawn_Hollow_Oni()
    tiles.placeOnTile(myEnemy, tiles.getTileLocation(14, 34))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite, location) {
    The_Temple()
    Enemy_Lock = 0
    blockSettings.writeNumber("Save", 7)
})
scene.onHitWall(SpriteKind.Enemy5, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = 48
    } else if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = -48
    } else if (sprite.isHittingTile(CollisionDirection.Bottom)) {
        if (blockSettings.readNumber("Save") != 5) {
            sprite.vy = -75
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Fire`, function (sprite, location) {
    mySprite.setKind(SpriteKind.Food)
    info.changeLifeBy(-1)
    Take_Damage()
    tiles.placeOnRandomTile(mySprite, assets.tile`Respawn0`)
    timer.after(256, function () {
        mySprite.setKind(SpriteKind.Player)
    })
})
function Meditate () {
    mySprite.vx = 0
    effects.clearParticles(mySprite)
    controller.moveSprite(mySprite, 0, 0)
    characterAnimations.setCharacterAnimationsEnabled(mySprite, false)
    mySprite.setImage(assets.image`Lorn_Low`)
    mySprite.setFlag(SpriteFlag.GhostThroughSprites, false)
    Can_Attack = false
    if (info.life() < 5) {
        if (Spirit_Charge >= 2) {
            Meditating = true
            pause(2000)
            if (Meditating == true) {
                Meditating = false
                Cancel()
                extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Explosion), 50, 12, 5)
                info.changeLifeBy(1)
                Spirit_Charge += -2
            }
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Mega_Oni_Chest`, function (sprite, location) {
    mySprite.vx = 0
    game.showLongText("You got the Rico Kunai!", DialogLayout.Top)
    Weapons_Unlocked = 3
    game.showLongText("You have every weapon now!", DialogLayout.Top)
    tiles.setTileAt(location, assets.tile`Invisible_Mega_Chest`)
})
function Spawn_Ranger () {
    Ranger_Enemy = sprites.create(assets.image`Ranger`, SpriteKind.Enemy4)
    statusbar = statusbars.create(11, 1, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(Ranger_Enemy)
    statusbar.setColor(0, 0)
    myEnemy.ay = 256
    Ranger_Active = true
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy2, function (sprite, otherSprite) {
    if (Weapon == 2) {
        if (sprite.vy > 0) {
            Recoil()
        }
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -20
    } else if (Weapon == 3) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -5
    } else {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -10
    }
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value == 0) {
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Explosion), 64, 15, 15)
        sprites.destroy(otherSprite)
    }
    if (Weapon != 3) {
        effects.clearParticles(sprite)
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 10, 10, 8)
        sprites.destroy(sprite)
    }
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`Fire0`, function (sprite, location) {
    Recoil()
})
info.onLifeZero(function () {
    game.splash("GAME OVER")
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    mySprite.setKind(SpriteKind.Food)
    if (Ground_Pound == true) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -13
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 10, 10, 8)
    } else {
        info.changeLifeBy(-2)
        Take_Damage()
    }
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value == 0) {
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Explosion), 64, 13, 12)
        sprites.destroy(otherSprite)
    }
    timer.after(428, function () {
        mySprite.setKind(SpriteKind.Player)
    })
})
scene.onHitWall(SpriteKind.Enemy2, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = 40
    } else if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = -40
    }
})
scene.onHitWall(SpriteKind.Enemy6, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = 50
    } else if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = -50
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Fire0`, function (sprite, location) {
    mySprite.setKind(SpriteKind.Food)
    info.changeLifeBy(-1)
    Take_Damage()
    tiles.placeOnRandomTile(mySprite, assets.tile`Respawn1`)
    timer.after(256, function () {
        mySprite.setKind(SpriteKind.Player)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Mega_Chest`, function (sprite, location) {
    mySprite.vx = 0
    game.showLongText("You got the Phantom Sword!", DialogLayout.Top)
    Weapons_Unlocked = 2
    game.showLongText("Press MENU to switch weapons.", DialogLayout.Top)
    tiles.setTileAt(location, assets.tile`Invisible_Mega_Chest`)
})
sprites.onDestroyed(SpriteKind.Enemy5, function (sprite) {
    Spirit_Charge += 3
    Enemy_Lock += 3
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`Enemy_Left`, function (sprite, location) {
    sprite.vx = -30
})
function The_Begining () {
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level2`))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 12))
    Spawn_Oni()
    tiles.placeOnTile(myEnemy, tiles.getTileLocation(87, 13))
    Spawn_Oni()
    tiles.placeOnTile(myEnemy, tiles.getTileLocation(103, 13))
    Spawn_Oni()
    tiles.placeOnTile(myEnemy, tiles.getTileLocation(250, 9))
}
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (Weapon == 3) {
        if (sprite.isHittingTile(CollisionDirection.Left)) {
            sprite.vx = 151
            sprite.setImage(assets.image`Kunai_Right`)
        } else if (sprite.isHittingTile(CollisionDirection.Right)) {
            sprite.vx = -151
            sprite.setImage(assets.image`Kunai_Left`)
        }
        timer.after(888, function () {
            sprites.destroy(sprite)
        })
    }
})
function The_Temple () {
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level12`))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 12))
    Spawn_Oni()
    tiles.placeOnTile(myEnemy, tiles.getTileLocation(51, 3))
    Spawn_Oni()
    tiles.placeOnTile(myEnemy, tiles.getTileLocation(2, 3))
    mySprite2 = sprites.create(assets.image`myImage3`, SpriteKind.Amulet)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile8`)
}
function The_Voyage () {
    tiles.setCurrentTilemap(tilemap`level18`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 0))
    Spawn_Oni()
    tiles.placeOnTile(myEnemy, tiles.getTileLocation(95, 8))
    Spawn_Roni()
    tiles.placeOnTile(myEnemy, tiles.getTileLocation(164, 4))
    Spawn_Oni()
    tiles.placeOnTile(myEnemy, tiles.getTileLocation(180, 4))
}
function Reset () {
    if (controller.A.isPressed() && controller.B.isPressed()) {
        if (game.ask("Delete save data?")) {
            blockSettings.writeNumber("Save", 0)
            game.reset()
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Spectral_Tile40`, function (sprite, location) {
    tileUtil.replaceAllTiles(assets.tile`Invisible_Mega_Chest_0`, assets.tile`Mega_Chest`)
    tileUtil.replaceAllTiles(assets.tile`Spectral_Tile40`, assets.tile`Spectral_Tile33`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Spirit_Chest1`, function (sprite, location) {
    mySprite.vx = 0
    game.showLongText("You got Spirit Energy!", DialogLayout.Top)
    tiles.setTileAt(location, assets.tile`Invisible_Chest`)
    Spirit_Charge += list.indexOf(list._pickRandom())
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Spectral_Tile39`, function (sprite, location) {
    tileUtil.replaceAllTiles(assets.tile`Invisible_Mega_Chest_1`, assets.tile`Mega_Oni_Chest`)
    tileUtil.replaceAllTiles(assets.tile`Spectral_Tile39`, assets.tile`Spectral_Tile30`)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`Fire`, function (sprite, location) {
    Recoil()
})
function The_Hollow () {
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level0`))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 9))
    Spawn_Hopni()
    tiles.placeOnTile(myEnemy, tiles.getTileLocation(12, 12))
    Spawn_Oni()
    tiles.placeOnTile(myEnemy, tiles.getTileLocation(161, 12))
    Spawn_Ranger()
    tiles.placeOnTile(Ranger_Enemy, tiles.getTileLocation(165, 12))
    Spawn_Oni()
    tiles.placeOnTile(myEnemy, tiles.getTileLocation(199, 8))
}
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    Spirit_Charge += 1
    Enemy_Lock += 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.A.isPressed() && controller.B.isPressed()) {
        if (Cheat == true) {
            Cheat = false
            controller.moveSprite(mySprite, 56, 0)
            mySprite.setFlag(SpriteFlag.GhostThroughSprites, false)
            mySprite.ay = 256
            characterAnimations.loopFrames(
            mySprite,
            assets.animation`Lorn_Jump_Left`,
            80,
            characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp)
            )
            characterAnimations.loopFrames(
            mySprite,
            assets.animation`Lorn_Jump_Right`,
            80,
            characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp)
            )
        } else {
            if (game.askForString("ENTER CODE") == "ULTIMATE") {
                Cheat = true
                characterAnimations.loopFrames(
                mySprite,
                assets.animation`Lorn_Left`,
                500,
                characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp)
                )
                characterAnimations.loopFrames(
                mySprite,
                assets.animation`Lorn_Right`,
                50,
                characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp)
                )
            }
        }
    }
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        Slide()
        Reset()
    } else {
        if (Weapon == 2) {
            if (Can_Attack == true) {
                Can_Attack = false
                projectile = sprites.createProjectileFromSprite(assets.image`Kunai_Left`, mySprite, 0, 256)
                animation.runImageAnimation(
                projectile,
                assets.animation`Great_Slash_Down`,
                100,
                false
                )
                timer.after(333, function () {
                    Can_Attack = true
                })
            }
        } else {
            Ground_Pound = true
            mySprite.vy = 256
            extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), 100, 11, 12)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy5, function (sprite, otherSprite) {
    mySprite.setKind(SpriteKind.Food)
    if (Ground_Pound == true) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -12
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 10, 10, 8)
    } else {
        info.changeLifeBy(-2)
        Take_Damage()
    }
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value == 0) {
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Explosion), 64, 12, 12)
        sprites.destroy(otherSprite)
    }
    timer.after(555, function () {
        mySprite.setKind(SpriteKind.Player)
    })
})
function Cancel () {
    characterAnimations.setCharacterAnimationsEnabled(mySprite, true)
    controller.moveSprite(mySprite, 56, 0)
    effects.clearParticles(mySprite)
    if (mySprite.kind() == SpriteKind.Player) {
        mySprite.setFlag(SpriteFlag.GhostThroughSprites, false)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Amulet, function (sprite, otherSprite) {
    extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Explosion), 100, 38, 25)
    extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Explosion), 100, 38, 25)
    pause(256)
    sprites.destroy(otherSprite)
    pause(555)
    tileUtil.replaceAllTiles(assets.tile`Fire0`, assets.tile`Respawn4`)
    tileUtil.setWalls(assets.tile`Spectral_Tile42`, false)
    tileUtil.replaceAllTiles(assets.tile`Spectral_Tile42`, assets.tile`transparency8`)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile61`, function (sprite, location) {
    if (Weapon == 1) {
        tileUtil.setWalls(assets.tile`myTile10`, false)
        tileUtil.replaceAllTiles(assets.tile`myTile10`, assets.tile`transparency8`)
        tileUtil.replaceAllTiles(assets.tile`myTile62`, assets.tile`Fire0`)
        tileUtil.replaceAllTiles(assets.tile`myTile3`, assets.tile`transparency8`)
        tileUtil.replaceAllTiles(assets.tile`myTile61`, assets.tile`transparency8`)
        sprites.destroy(sprite)
    }
})
function Slide () {
    characterAnimations.setCharacterAnimationsEnabled(mySprite, false)
    if (mySprite.vx > 0) {
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), 25612, 5, 12)
        controller.moveSprite(mySprite, 0, 0)
        mySprite.setImage(assets.image`Lorn_Slide_Right`)
        mySprite.vx = 45
    } else if (mySprite.vx < 0) {
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), 25612, 5, 12)
        controller.moveSprite(mySprite, 0, 0)
        mySprite.setImage(assets.image`Lorn_Slide_Left`)
        mySprite.vx = -45
    } else {
        Meditate()
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Weapon == 2) {
        if (sprite.vy > 0) {
            Recoil()
        }
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -50
    } else if (Weapon == 3) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -11
    } else {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -25
    }
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value == 0) {
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Explosion), 64, 11, 12)
        sprites.destroy(otherSprite)
    }
    if (Weapon != 3) {
        effects.clearParticles(sprite)
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 10, 10, 8)
        sprites.destroy(sprite)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Mega_Spirit_Chest2`, function (sprite, location) {
    mySprite.vx = 0
    game.showLongText("You got the Spirit Shuriken!", DialogLayout.Top)
    Weapons_Unlocked = 1
    game.showLongText("Press MENU to switch weapons.", DialogLayout.Top)
    tiles.setTileAt(location, assets.tile`Invisible_Mega_Chest`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    blockSettings.writeNumber("Save", 5)
    Clear()
    The_Voyage()
    Enemy_Lock = 0
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Jump()
    Reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.setKind(SpriteKind.Food)
    if (Ground_Pound == true) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -30
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 10, 10, 8)
    } else {
        info.changeLifeBy(-1)
        Take_Damage()
    }
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value == 0) {
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Explosion), 64, 11, 12)
        sprites.destroy(otherSprite)
    }
    timer.after(365, function () {
        mySprite.setKind(SpriteKind.Player)
    })
})
let Oni_Lightning: Sprite = null
let mySprite2: Sprite = null
let Ranger_Enemy: Sprite = null
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let myEnemy: Sprite = null
let list: number[] = []
let Float = false
let Meditating = false
let Ground_Pound = false
let Can_Attack = false
let Ranger_Active = false
let Sliding = false
let Spoke = false
let Enemy_Lock = 0
let Spirit_Charge = 0
let Direction = 0
let Weapons_Unlocked = 0
let Weapon = 0
let Cheat = false
let mySprite: Sprite = null
music.stopAllSounds()
scene.setBackgroundColor(15)
mySprite = sprites.create(assets.image`Title`, SpriteKind.Player)
mySprite.setStayInScreen(true)
if (blockSettings.readNumber("Save") > 0 == false) {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Copy_Intro`,
    80,
    false
    )
    pause(3000)
    animation.runImageAnimation(
    mySprite,
    assets.animation`Title_Intro`,
    80,
    false
    )
    pause(240)
}
animation.runImageAnimation(
mySprite,
assets.animation`Title_Animation`,
256,
true
)
pauseUntil(() => controller.A.isPressed())
sprites.destroy(mySprite)
scene.setBackgroundImage(assets.image`Nothing`)
game.setDialogTextColor(1)
game.setDialogCursor(assets.image`Nothing`)
game.setDialogFrame(assets.image`Frame`)
if (blockSettings.readNumber("Save") == 0) {
    game.showLongText("Welcome to the land of Katandra...", DialogLayout.Full)
    game.showLongText("In Katandra the Sprits are in a constant war against the Oni...", DialogLayout.Full)
    game.showLongText("Recently the Void Amulet was stolen from the Spirit temple... ", DialogLayout.Full)
    game.showLongText("Without the Void Amulet the world hollowed out and the Oni took over...", DialogLayout.Full)
    game.showLongText("Your job is to go to the Oni temple and take back the Void Amulet...", DialogLayout.Full)
}
mySprite = sprites.create(assets.image`Lorn`, SpriteKind.Player)
mySprite.z = 256
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 56, 0)
mySprite.ay = 256
let Charge = sprites.create(assets.image`Charge_5`, SpriteKind.StatusBar)
Charge.z = 151
Charge.setFlag(SpriteFlag.Invisible, true)
Charge.setStayInScreen(true)
Charge.setFlag(SpriteFlag.GhostThroughWalls, true)
Charge.setVelocity(888, -888)
timer.after(256, function () {
    Charge.setFlag(SpriteFlag.Invisible, false)
})
Cheat = false
let Area = 1
Weapon = 0
Weapons_Unlocked = 0
Direction = 1
Spirit_Charge = 0
Enemy_Lock = 0
let Music = 0
Spoke = false
Sliding = false
Ranger_Active = false
Can_Attack = true
Ground_Pound = true
Meditating = false
Float = false
list = [
1,
2,
3,
4,
5,
6
]
profilelife.setFilledLifeImage(assets.image`Heart`)
profilelife.setEmptyLifeImage(assets.image`Nothing`)
profilelife.setMaxLife(5)
info.setLife(5)
characterAnimations.loopFrames(
mySprite,
assets.animation`Lorn_Run_Right`,
50,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`Lorn_Run_Left`,
50,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`Lorn_Right`,
50,
characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`Lorn_Left`,
50,
characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`Lorn_Jump_Left`,
80,
characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`Lorn_Jump_Right`,
80,
characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`Lorn_Jump_Left`,
80,
characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`Lorn_Fall_Right`,
50,
characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`Lorn_Fall_Left`,
50,
characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown)
)
Start()
game.onUpdate(function () {
    if (Cheat == true) {
        controller.moveSprite(mySprite, 111, 155)
        mySprite.setFlag(SpriteFlag.GhostThroughSprites, true)
        Can_Attack = true
        info.changeLifeBy(1)
    }
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = 0
        Ground_Pound = false
        Float = false
    }
    if (mySprite.vy < 0 || (mySprite.isHittingTile(CollisionDirection.Right) || mySprite.isHittingTile(CollisionDirection.Left))) {
        Cancel()
    }
    if (mySprite.vx == 45 || mySprite.vx == -45) {
        mySprite.setFlag(SpriteFlag.GhostThroughSprites, true)
        Sliding = true
    } else {
        Sliding = false
    }
    if (mySprite.vx > 0) {
        Direction = 1
        Meditating = false
    } else if (mySprite.vx < 0) {
        Direction = 2
        Meditating = false
    }
    if (Spirit_Charge == 0) {
        Charge.setImage(assets.image`Charge_0`)
    } else if (Spirit_Charge == 1) {
        Charge.setImage(assets.image`Half_Charge_1`)
    } else if (Spirit_Charge == 2) {
        Charge.setImage(assets.image`Charge_1`)
    } else if (Spirit_Charge == 3) {
        Charge.setImage(assets.image`Half_Charge_2`)
    } else if (Spirit_Charge == 4) {
        Charge.setImage(assets.image`Charge_2`)
    } else if (Spirit_Charge == 5) {
        Charge.setImage(assets.image`Half_Charge_3`)
    } else if (Spirit_Charge == 6) {
        Charge.setImage(assets.image`Charge_3`)
    } else if (Spirit_Charge == 7) {
        Charge.setImage(assets.image`Half_Charge_4`)
    } else if (Spirit_Charge == 8) {
        Charge.setImage(assets.image`Charge_4`)
    } else if (Spirit_Charge == 9) {
        Charge.setImage(assets.image`Half_Charge_5`)
    } else if (Spirit_Charge == 10) {
        Charge.setImage(assets.image`Charge_5`)
    } else if (Spirit_Charge > 10) {
        Spirit_Charge = 10
    } else if (Spirit_Charge < 0) {
        Spirit_Charge = 0
    }
    if (blockSettings.readNumber("Save") < 2) {
        if (Enemy_Lock == 11) {
            tileUtil.setWalls(assets.tile`myTile0`, false)
            tileUtil.replaceAllTiles(assets.tile`myTile0`, assets.tile`transparency8`)
            scene.cameraFollowSprite(mySprite)
            timer.after(55, function () {
                tiles.setTileAt(tiles.getTileLocation(162, 12), assets.tile`Spirit_Chest1`)
            })
            Enemy_Lock = 12
            blockSettings.writeNumber("Save", 2)
        } else if (Enemy_Lock == 3) {
            Spawn_Oni()
            tiles.placeOnTile(myEnemy, tiles.getTileLocation(168, 12))
            Spawn_Oni()
            tiles.placeOnTile(myEnemy, tiles.getTileLocation(156, 12))
            myEnemy.vx = 30
            Enemy_Lock = 4
        } else if (Enemy_Lock == 6) {
            Spawn_Oni()
            tiles.placeOnTile(myEnemy, tiles.getTileLocation(168, 12))
            Spawn_Oni()
            tiles.placeOnTile(myEnemy, tiles.getTileLocation(156, 12))
            myEnemy.vx = 30
            Spawn_Roni()
            tiles.placeOnTile(myEnemy, tiles.getTileLocation(162, 11))
            Enemy_Lock = 7
        }
    }
    if (blockSettings.readNumber("Save") == 5) {
        if (Enemy_Lock == 15) {
            tileUtil.setWalls(assets.tile`myTile0`, false)
            tileUtil.replaceAllTiles(assets.tile`myTile0`, assets.tile`transparency8`)
            tileUtil.replaceAllTiles(assets.tile`myTile14`, assets.tile`Fire`)
            scene.cameraFollowSprite(mySprite)
            blockSettings.writeNumber("Save", 6)
            timer.after(55, function () {
                tiles.setTileAt(tiles.getTileLocation(39, 9), assets.tile`Mega_Spirit_Chest2`)
            })
        } else if (Enemy_Lock == 4) {
            mySprite.setFlag(SpriteFlag.GhostThroughSprites, true)
            Spawn_Roni()
            tiles.placeOnTile(myEnemy, tiles.getTileLocation(45, 9))
            Spawn_Roni()
            tiles.placeOnTile(myEnemy, tiles.getTileLocation(33, 9))
            timer.after(800, function () {
                mySprite.setFlag(SpriteFlag.GhostThroughSprites, false)
            })
            Enemy_Lock = 5
        } else if (Enemy_Lock == 9) {
            mySprite.setFlag(SpriteFlag.GhostThroughSprites, true)
            Spawn_Oni()
            tiles.placeOnTile(myEnemy, tiles.getTileLocation(45, 9))
            Spawn_Zoni()
            tiles.placeOnTile(myEnemy, tiles.getTileLocation(39, 7))
            Spawn_Oni()
            tiles.placeOnTile(myEnemy, tiles.getTileLocation(33, 9))
            timer.after(800, function () {
                mySprite.setFlag(SpriteFlag.GhostThroughSprites, false)
            })
            Enemy_Lock = 10
        }
    }
})
game.onUpdateInterval(2000, function () {
    if (Ranger_Active == true) {
        if (Ranger_Enemy.tileKindAt(TileDirection.Center, assets.tile`Invisible_Mega_Chest`)) {
            Oni_Lightning = sprites.createProjectileFromSprite(assets.image`Shot`, Ranger_Enemy, -123, 0)
            extraEffects.createSpreadEffectOnAnchor(Oni_Lightning, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Twinkle), 1111, 1, 10)
            Oni_Lightning.setKind(SpriteKind.Evil)
        }
    }
    Can_Attack = true
})
forever(function () {
    if (Music == 1) {
        music.play(music.stringPlayable(music.convertRTTTLToMelody("DD_Ending:d=4,o=5,b=100:8d6,8c6,8d6,8g6,8d6,8c6,8d6,8c6,8b,8a,8b,8c6,8d6,8e6,8f6,8g6,8a6,8f6,8d6,8c6,8b,8a,8b,8c6,8d6,8e6,8f6,8c6,8d6,8b,8a,8g,8d6,8c6,8d6,8g6,8d6,8c6,8d6,8c6,8b,8a,8b,8c6,8d6,8e6,8f6,8g6,8a6,8f6,8d6,8c6,8b,8a,8b,8c6,8d6,8e6,8f6,8c6,8d6,8b,8a,8g"), 100), music.PlaybackMode.UntilDone)
    } else if (Music == 2) {
        music.play(music.stringPlayable(music.convertRTTTLToMelody("DD_Ending:d=4,o=5,b=100:8d6,8c6,8d6,8g6,8d6,8c6,8d6,8c6,8b,8a,8b,8c6,8d6,8e6,8f6,8g6,8a6,8f6,8d6,8c6,8b,8a,8b,8c6,8d6,8e6,8f6,8c6,8d6,8b,8a,8g,8d6,8c6,8d6,8g6,8d6,8c6,8d6,8c6,8b,8a,8b,8c6,8d6,8e6,8f6,8g6,8a6,8f6,8d6,8c6,8b,8a,8b,8c6,8d6,8e6,8f6,8c6,8d6,8b,8a,8g"), 200), music.PlaybackMode.UntilDone)
    } else if (Music == 3) {
        music.play(music.stringPlayable(music.convertRTTTLToMelody("DD_Ending:d=4,o=5,b=100:8d6,8c6,8d6,8g6,8d6,8c6,8d6,8c6,8b,8a,8b,8c6,8d6,8e6,8f6,8g6,8a6,8f6,8d6,8c6,8b,8a,8b,8c6,8d6,8e6,8f6,8c6,8d6,8b,8a,8g,8d6,8c6,8d6,8g6,8d6,8c6,8d6,8c6,8b,8a,8b,8c6,8d6,8e6,8f6,8g6,8a6,8f6,8d6,8c6,8b,8a,8b,8c6,8d6,8e6,8f6,8c6,8d6,8b,8a,8g"), 300), music.PlaybackMode.UntilDone)
    } else if (Music == 4) {
        music.play(music.stringPlayable(music.convertRTTTLToMelody("ddragon2_2:d=4,o=5,b=80:16b4,16b4,16e,16f#,16p,16b4,16e,16f#,16b4,16b4,16e,16f#,16p,16b4,16e,16f#,16a4,16a4,16d,16e,16p,16a4,16d,16e,16a4,16a4,16d,16e,16p,16a4,16d,16e,16b,16a#,16c#,8b,16a#,8c#,16b,16a#,16c#,8b,16a#,8c#6,16b,16a#,16g#,8e.,8b4,16a,8g#,8b,16a,16g#,16e"), 80), music.PlaybackMode.UntilDone)
    } else if (Music == 5) {
        music.play(music.stringPlayable(music.convertRTTTLToMelody("ddragon2:d=4,o=5,b=140:g,8g,8a#,8c6,8g,8g6,8p,2f,d.,8a,g,8g,8a#,8c6,8g,8g6,8p,8a#4,a#.4,8c,c."), 140), music.PlaybackMode.UntilDone)
    } else if (Music == 6) {
        music.play(music.stringPlayable(music.convertRTTTLToMelody("DD_Level4:d=4,o=5,b=140:8e,8g,8g#,8a,8g,8e,8b,8a,8g#,8a,8c6,8b,8a,8g,8e,8a,8g#,8a,8b,8c6,8d6,8b,8c6,8g#,8a,8d#,8e,8b4,8c,8g#4,8a4,8d#4,8e4,8g#4,8a4,8b4,8c,8d#,8e,8a,8g#,8a,8c6,8b,8a,8g,8e,8a,8g#,8a,8b,8c6,8d6,8b,8c6,8g#,8a,8d#,8e,8b4,8c,8g#4,8a4,8d#4,8e4,8g#4,8a4,8b4,8c,8d#,8e"), 160), music.PlaybackMode.UntilDone)
    } else if (Music == 7) {
        music.play(music.stringPlayable(music.convertRTTTLToMelody("kungfumaster1:d=4,o=6,b=63:16g,32g,32f,16g,32g,32f,16g,32g,32f,32g,32a#,32g,32f,16g,32g,32f,16g,32g,32f,16g,32g,32f,32g,32a#,32g,32f,16c7,32c7,32a#,16c7,32c7,32a#,16c7,32c7,32a#,32c7,32d#7,32c7,32a#,16g,32g,32f,16g,32g,32f,16g,32g,32f,32g,32a#,32g,32f,16d7,32d7,32c7,16d7,32d7,32c7,16d7,32d7,32c7,32d7,32f7,32d7,16c7,32c7,32a#,16c7,32c7,32a#,16c7,32c7,32a#,32c7,32d#7,32c7,32a#"), 63), music.PlaybackMode.UntilDone)
    }
})

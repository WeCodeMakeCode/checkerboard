function do_checker_variable_Cells (this_sprite: Sprite, color1: number, color2: number, pixels_per_cell: number) {
    this_sprite.image.fill(color1)
    for (let R = 0; R <= this_sprite.height / pixels_per_cell - 1; R++) {
        rp = pixels_per_cell * R
        for (let C = 0; C <= this_sprite.width / pixels_per_cell - 1; C++) {
            cp = pixels_per_cell * C
            if ((R + C) % 2 == 0) {
                this_sprite.image.fillRect(cp, rp, pixels_per_cell, pixels_per_cell, color2)
            }
        }
    }
}
let cp = 0
let rp = 0
let col_cells = 0
let row_cells = 0
let pixels_per_cell = 0
let color2 = 0
let color1 = 0
let screen_sprite = sprites.create(image.create(scene.screenWidth(), scene.screenHeight()), SpriteKind.Player)
for (let index = 0; index < 10; index++) {
    color1 = Math.randomRange(1, 15)
    color2 = Math.randomRange(1, 15)
    while (color1 == color2) {
        color2 = Math.randomRange(1, 15)
    }
    for (let index = 0; index <= 12; index++) {
        pixels_per_cell = (index + 1) * 4
        row_cells = Math.ceil(scene.screenHeight() / pixels_per_cell)
        col_cells = Math.ceil(scene.screenWidth() / pixels_per_cell)
        screen_sprite = sprites.create(image.create(col_cells * pixels_per_cell, row_cells * pixels_per_cell), SpriteKind.Player)
        do_checker_variable_Cells(screen_sprite, color1, color2, pixels_per_cell)
        pause(100)
    }
}

////////////////////////////
/// Params /////////////////
////////////////////////////

const rand = arr => arr[Math.floor(arr.length * Math.random())]

// painting param
const SIZE = 64
const OPACITY_AVAILABLE = [0.2, 0.5, 0.8, 1]
const RADIUS_AVAILABLE = [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    10,
    12,
    14,
    16,
    18,
    22,
    26,
    30,
    36,
    40,
]

const COLOR_PALETTE = []

// prettier-ignore
for(let r=0;r<256;r+= 50)
for(let v=0;v<256;v+= 50)
for(let b=0;b<256;b+= 50)
    COLOR_PALETTE.push([r,v,b]);

// materials
const wall = new THREE.MeshPhongMaterial({ color: 0xf8f8f8 })
const lat = new THREE.MeshPhongMaterial({ color: 0xc8c8c8 })
const ceiling = new THREE.MeshBasicMaterial({ color: 0x888888 })

// map

const l = [
    SIZE,
    SIZE,
    RADIUS_AVAILABLE.length,
    COLOR_PALETTE.length,
    OPACITY_AVAILABLE.length,
].map(x => Math.ceil(Math.log(x) / Math.LN2))

const m = [0]
l.forEach((l, i) => (m[i + 1] = m[i] + l))

const n_dot = l.reduce((sum, l) => sum + l, 0)

const readNumber = (a, b, arr) => {
    let sum = 0

    for (let k = a; k < b; k++) {
        const bit = !!(arr[Math.floor(k / 8)] & (1 << (k % 8)))

        sum += +bit << (k - a)
    }

    return sum
}

const arrayToDot = arr => ({
    x: arr[0],
    y: arr[1],
    r: RADIUS_AVAILABLE[arr[2]],
    color: COLOR_PALETTE[arr[3]],
    opacity: OPACITY_AVAILABLE[arr[4]],
})

const unpackADN = buffer => {
    const adn = []
    let offset = 0

    while (offset < buffer.length * 8 - n_dot) {
        adn.push(
            arrayToDot(
                l.map(l => {
                    const o = offset
                    offset = offset + l

                    return readNumber(o, offset, buffer)
                })
            )
        )
    }

    return adn
}

const readPainting = path => {
    return fetch(path)
        .then(x => x.text())
        .then(x => unpackADN(new Uint8Array(x.split(',').map(x => +x))))
    // return fetch(path)
    //     .then(x => x.arrayBuffer())
    //     .then(x => unpackADN(new Uint8Array(x)))
}

const paintings = Array.from({ length: 30 }, () =>
    Array.from({ length: 30 }, () => ({
        x: Math.random() * 64,
        y: Math.random() * 64,
        r: Math.random() * 30,
        color: rand(COLOR_PALETTE),
        opacity: 1,
    }))
)

let step = 1

const texts = [
    [
        ['Oups, you are lost in a museum'],
        [],
        ['Find your way out!'],
        [],
        ['First stop:'],
        ['Find "La Joconde"'],
    ],
    [
        ['Good!'],
        [],
        ['Next:'],
        ['Find "Starry nigth"'],
        ['by Van Gogh'],
        ['in the room to your'],
        ['left'],
    ],
    [
        ['Great!'],
        [],
        ['Find "Scream"'],
        ['by Munch'],
        ['in the room to your'],
        ['right'],
    ],
    [
        ['OK!'],
        [],
        ['Next:'],
        ['"The Great Wave"'],
        ['by Hokusai'],
        ['in this room'],
    ],
    [
        ['Nice!'],
        [],
        ['Next:'],
        ['"La liberté"'],
        ['by Delacroix'],
        ['in the next room'],
    ],
    [['Nice!'], [], ["it's 12h30"], ['no more time'], ["let's say you win"]],
]

const worldMap =
    '                                                                                      \n' +
    '           ###########################                                                   \n' +
    '           #                        ###########################                       \n' +
    '           #                        #                         ##########                        \n' +
    '           #   ##b#  ##5#   ##b#    #                         #        #                \n' +
    '    #6#7#8##                            r      r      3       #####    #                    \n' +
    '                                                                      #               \n' +
    '           #                                                           #                \n' +
    '           #                            4      r      r       ##########                        \n' +
    '           #   ##t#  ##t#   ##t#    #                         #                        \n' +
    '           #                        #                         #                        \n' +
    '           #                        ######################  ###                            \n' +
    '           ####################   ######                 #  #                             \n' +
    '                 #                    ###################  ####                                             \n' +
    '                 #                    ##   #       #       #                            \n' +
    '                 #           #  #     ##   r       l       2                            \n' +
    '                 #                         #       #       #                           \n' +
    '                 # ###########   #######       #       #   #                                  \n' +
    '                          ####   ####  #       l       l   #                            \n' +
    '                          #         #  #       #       #   ######                            \n' +
    '                          #         #  #       #       #        #                       \n' +
    '                          r         l  #       l       l   #### #                           \n' +
    '                          #         ####       #       #   #  # #                           \n' +
    '                          #    1           #       #       #  # #                       \n' +
    '                          #         ####   r       l       #  # #                            \n' +
    '                          r         l  #   #       #       #  # #                          \n' +
    '                          #         #  ################ ####### #                                          \n' +
    '                          #         #                 #         #                      \n' +
    '                          #### ######                 ###########                             \n' +
    '                             #   #                                                     \n' +
    '                             #   #                                                  '

const getCell = x => {
    switch (x) {
        // mona lisa
        case '1':
            return [null, 1, null, null]

        /// starry night
        case '2':
            return [null, null, 2, null]

        // scream
        case '3':
            return [3, null, null, null]

        // the great wave
        case '4':
            return [4, null, null, null]

        // delacroix
        case '5':
            return [null, 5, null, null]

        case '6':
            return [null, 6, null, null]
        case '7':
            return [null, 7, null, null]
        case '8':
            return [null, 8, null, null]

        case 'l':
            return [null, null, Math.floor(Math.random() * 10) + 20, null]
        case 't':
            return [null, null, null, Math.floor(Math.random() * 10) + 20]
        case 'r':
            return [Math.floor(Math.random() * 10) + 20, null, null, null]
        case 'b':
            return [null, Math.floor(Math.random() * 10) + 20, null, null]

        default:
            return [null, null, null, null]
    }
}

const world = {
    worldGrid: worldMap
        .split('\n')
        .map(line => line.split('').map(c => (c === ' ' ? 0 : getCell(c)))),

    tim: {
        position: { x: 30.5, y: 31.5 },
        direction: { x: 0, y: 1 },
    },

    control: {
        direction: { x: 0, y: 0 },
    },
}

////////////////////////////
/// World Logic ////////////
////////////////////////////

const around = [
    { x: 0, y: 1 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: -1, y: 0 },

    { x: 1, y: 1 },
    { x: -1, y: 1 },
    { x: -1, y: -1 },
    { x: 1, y: -1 },
]

const isInside = (grid, x, y) =>
    x >= 0 && x < grid.length && y >= 0 && y < grid[0].length

const getClosestWall = (p, grid) => {
    const gx = Math.floor(p.x)
    const gy = Math.floor(p.y)

    return around.reduce((best, dir) => {
        const x = gx + dir.x
        const y = gy + dir.y

        // is a wall
        if (!isInside(grid, x, y) || grid[x][y]) {
            const dx = dir.x === 0 ? 0 : dir.x > 0 ? 1 - p.x % 1 : p.x % 1
            const dy = dir.y === 0 ? 0 : dir.y > 0 ? 1 - p.y % 1 : p.y % 1

            const d = Math.sqrt(dx * dx + dy * dy)

            return !best || best.d > d ? { x, y, dir, d } : best
        } else return best
    }, null)
}

const tick = () => {
    // make tim walk

    const { position, direction } = world.tim
    const control = world.control

    position.x += direction.x * control.direction.y * 0.05
    position.y += direction.y * control.direction.y * 0.05

    const closestWall = getClosestWall(position, world.worldGrid)

    const L = 0.2

    if (closestWall && closestWall.d < L) {
        const r = L - closestWall.d

        position.x -= r * closestWall.dir.x
        position.y -= r * closestWall.dir.y
    }
}

////////////////////////////
/// Component///////////////
////////////////////////////

//// component tim
////
document.onkeydown = e => e.which == 32 && (world.control.direction.y = 1)

document.onkeyup = e => e.which == 32 && (world.control.direction.y = 0)

document.ontouchstart = e => (world.control.direction.y = 1)

document.ontouchend = e => (world.control.direction.y = 0)

AFRAME.registerComponent('tim', {
    init: function() {
        {
            const geom = new THREE.BoxGeometry(0.1, 0.1, 0.1)
            const mat = new THREE.MeshLambertMaterial({ color: 0x2193ae })
            const mesh = new THREE.Mesh(geom, mat)

            this.el.object3D.add(mesh)
        }
    },
    tick: function() {
        const direction = this.el.children[0].object3D.rotation.y

        world.tim.direction.x = -Math.sin(direction)
        world.tim.direction.y = -Math.cos(direction)

        tick()

        this.el.object3D.position.set(
            world.tim.position.x,
            0.6,
            world.tim.position.y
        )
    },
})

//// component museum
////

const L = 0.28
const K = 100

const planeGeom = new THREE.PlaneBufferGeometry(1, 1)

const getU = (n, i, k) =>
    Math.max(0, Math.min(1, (k - (1 - L) * (n - i) / n) / L))

const getDisplacement = (x, y, u, t) => {
    const seed = (x * 36 + y * y * x * 137 + x * x * 89) % 37 / 37

    // u = 1 - (1 - u) * (1 - u)

    const s = Math.sin((1 + seed) * 0.045 * t) * u
    const c = Math.cos((1 + seed) * 0.035 * t) * u

    const vx = x - 0.5 + (x < 0.5 ? -0.4 : 0.4)
    const vy = y - 0.5

    return {
        x: x + vx * u + s * 0.2,
        y: y + vy * u + c * 0.17,
        z: u * (0.6 + seed * 0.6) - 0.1 + s * 0.17 * (1 + seed),
    }
}

const draw = (canvas, size, painting, text, k, t) => {
    const l = 512

    canvas.width = canvas.height = l

    const ctx = canvas.getContext('2d')

    ctx.beginPath()
    ctx.rect(0, 0, l, l)
    ctx.fillStyle = '#fff'
    ctx.fill()

    painting.forEach((dot, i) => {
        const u = getU(painting.length, i, k)
        const d = getDisplacement(dot.x / size, dot.y / size, u, t)

        const w = dot.r * dot.r - d.z * d.z

        const r =
            d.z > dot.r / size
                ? 0
                : Math.sqrt(dot.r / size * dot.r / size - d.z * d.z)

        ctx.beginPath()
        ctx.arc(d.x * l, d.y * l, r * l, 0, Math.PI * 2)
        ctx.fillStyle = 'rgb(' + dot.color + ')'
        ctx.globalAlpha = dot.opacity
        ctx.fill()
    })

    if (k > 0.8 && text) {
        ctx.globalAlpha = (k - 0.8) / 0.2
        text.forEach((t, i) => {
            ctx.fillStyle = '#333'
            ctx.font = '50px Helvetica'
            // ctx.beginPath()
            ctx.fillText(t, 50, i * 60 + 100)
        })
    }
}

const generatePainting = i => {
    const size = 64

    const object = new THREE.Object3D()

    const painting = paintings[i]
    const text = texts[i]

    // paint drop
    painting.forEach((dot, i) => {
        const mat = new THREE.MeshBasicMaterial(
            {
                // transparent: true,
                // opacity: dot.opacity ,
            }
        )

        mat.color.setRGB(...dot.color.map(x => x / 256))

        const geo = new THREE.SphereBufferGeometry(
            Math.min(dot.r / size, 0.5),
            Math.ceil(dot.r / 2) + 2,
            Math.ceil(dot.r / 2) + 2
        )
        const mesh = new THREE.Mesh(geo, mat)

        object.add(mesh)
    })

    // painting as texture
    const canvas = document.createElement('canvas')
    const texture = new THREE.Texture(canvas)
    {
        texture.needsUpdate = true
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping
        texture.repeat.set(1, 1)

        const mat = new THREE.MeshBasicMaterial()
        mat.map = texture

        const mesh = new THREE.Mesh(planeGeom, mat)
        mesh.position.z = 0.02

        object.add(mesh)

        const frame = new THREE.Mesh(planeGeom, lat)
        frame.position.z = 0.01
        frame.scale.set(1.1, 1.1, 1.1)
        object.add(frame)
    }

    let drawn_n = -1
    let ex_k = -1

    const update = (k, t) => {
        if (i > step) k = 0

        if (i == step && k > 0.9) step++

        if (k > 0 || Math.abs(k - ex_k) > 0.1 || (ex_k > 0 && k == 0)) {
            draw(canvas, size, painting, text, (ex_k = k), t)
            texture.needsUpdate = true
        }

        painting.forEach((dot, i) => {
            const u = getU(painting.length, i, k)
            const d = getDisplacement(dot.x / size, dot.y / size, u, t)

            object.children[i].visible = u > 0

            const s = 0.3 + (1 - u) * 0.7

            object.children[i].scale.set(s, s, s * u)

            object.children[i].position.set(d.x - 0.5, -(d.y - 0.5), d.z)
        })
    }

    update(0, 0)

    return { object, update, t: 0 }
}

const generatePaintings = worldGrid => {
    const p = []

    const object = new THREE.Object3D()

    for (let x = 0; x < worldGrid.length; x++)
        for (let y = 0; y < worldGrid[0].length; y++)
            for (let k = 0; worldGrid[x][y] && k < 4; k++)
                if (worldGrid[x][y][k]) {
                    const u = generatePainting(worldGrid[x][y][k])

                    p.push(u)

                    const a = around[k]

                    const l = 0.6 + 0.35 * Math.random()

                    u.object.scale.set(l, l, l)
                    u.object.position.set(
                        x + 0.5 + a.x * 0.505,
                        1,
                        y + 0.5 + a.y * 0.505
                    )

                    u.object.rotation.y = Math.PI / 2 * k

                    object.add(u.object)
                }

    let t = 0
    let prev_direction = { x: 0, y: 0 }

    const update = ({ position, direction }) => {
        // const x = direction.x - prev_direction.x
        // const y = direction.y - prev_direction.y
        //
        // const delta = x * x + y * y
        //
        // prev_direction.x = direction.x
        // prev_direction.y = direction.y
        //
        // const j = 0.1 + delta * 60

        t += 1

        p.forEach((p, i) => {
            const x = position.x - p.object.position.x
            const y = position.y - p.object.position.z

            const d = Math.sqrt(x * x + y * y)

            const scal = Math.max(0, -(x * direction.x + y * direction.y) / d)

            if (d < 3 && scal > 0.88) {
                p.t = Math.min(K + 50, p.t + 1)
            } else p.t = Math.max((p.t + 1) * 0.98 - 2, 0)

            p.update(Math.max(0, (p.t - 50) / K), t)
        })
    }

    return { object, update }
}

const generateMazeObject = world => {
    const maze = new THREE.Object3D()

    const w = world.length
    const h = world[0].length

    const floor = new THREE.MeshLambertMaterial()
    {
        const canvas = document.createElement('canvas')
        canvas.width = 16
        canvas.height = 1
        const ctx = canvas.getContext('2d')
        for (let i = 16; i--; ) {
            ctx.beginPath()
            ctx.rect(i, 0, 1, 1)

            const h = 32 + (0 | (8 * Math.random()))
            const l = 22 + (0 | (20 * Math.random()))

            ctx.fillStyle = `hsl(${h}, 55%, ${l}%)`
            ctx.fill()
        }

        const texture = new THREE.Texture(
            canvas,
            THREE.UVMapping,
            THREE.RepeatWrapping,
            THREE.NearestFilter,
            THREE.NearestFilter
        )
        texture.needsUpdate = true
        texture.repeat.set(10, 1)

        floor.map = texture
    }

    // floor
    {
        const geom = new THREE.PlaneBufferGeometry(w, h)
        const mesh = new THREE.Mesh(geom, floor)
        mesh.position.set(w / 2, 0, h / 2)
        mesh.rotation.x = -Math.PI / 2
        mesh.receiveShadow = true
        maze.add(mesh)
    }

    // wall
    {
        const geom = new THREE.BoxBufferGeometry(1, 3.2, 1)
        const geomlat = new THREE.BoxBufferGeometry(1.01, 0.2, 1.01)

        for (let x = world.length; x--; )
            for (let y = world[0].length; y--; )
                if (world[x][y]) {
                    const mesh = new THREE.Mesh(geom, wall)
                    mesh.position.set(x + 0.5, 0.8, y + 0.5)

                    mesh.castShadow = true
                    mesh.receiveShadow = false
                    maze.add(mesh)

                    const mesh2 = new THREE.Mesh(geomlat, lat)
                    mesh2.position.set(x + 0.5, 0.05, y + 0.5)
                    maze.add(mesh2)
                }
    }

    // rect
    {
        const m = [
            new THREE.BoxBufferGeometry(w, 3, 1),
            new THREE.BoxBufferGeometry(w, 3, 1),
            new THREE.BoxBufferGeometry(1, 3, h),
            new THREE.BoxBufferGeometry(1, 3, h),
        ].map(geom => new THREE.Mesh(geom, wall))

        m[0].position.set(w / 2, 1.5, h + 0.5)
        m[1].position.set(w / 2, 1.5, -0.5)
        m[2].position.set(w + 0.5, 1.5, h / 2)
        m[3].position.set(-0.5, 1.5, h / 2)

        maze.add(...m)
    }

    // ceiling
    {
        const geom = new THREE.PlaneBufferGeometry(0.06, h)

        for (let x = 0; x < world.length; x += 3) {
            const mesh = new THREE.Mesh(geom, ceiling)

            mesh.rotation.x = Math.PI / 2
            mesh.position.set(x + 0.03, 3.5, h / 2)

            maze.add(mesh)
        }
    }

    // intro text
    {
        const canvas = document.createElement('canvas')
        canvas.height = canvas.width = 512
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = '#fff'
        ctx.fillRect(0, 0, 512, 512)

        texts[0].forEach((t, i) => {
            ctx.fillStyle = '#333'
            ctx.font = '30px Helvetica'
            ctx.fillText(t, 50, i * 40 + 100)
        })

        const texture = new THREE.Texture(canvas)
        texture.needsUpdate = true
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping
        texture.repeat.set(1, 1)

        const mat = new THREE.MeshBasicMaterial()
        mat.map = texture

        const mesh = new THREE.Mesh(planeGeom, mat)
        mesh.position.z = 0.01

        mesh.scale.set(2, 2, 2)

        const object = new THREE.Object3D()

        object.position.set(30, 1.2, 30)

        object.rotation.y = 0

        object.add(mesh)
        maze.add(object)
    }

    {
        // const light = new THREE.SpotLight(0xffffff);
        // // const light = new THREE.DirectionalLight(0xffffff, 1, 100);
        // light.position.set(w, 10, h);
        // light.castShadow = true;
        // maze.add(light);
        //
        // //Set up shadow properties for the light
        // light.shadow.mapSize.width = 512;
        // light.shadow.mapSize.height = 512;
        // light.shadow.camera.near = 0.5;
        // light.shadow.camera.far = 50;
        //
        // const helper = new THREE.CameraHelper(light.shadow.camera);
        // maze.add(helper);
        // const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        // dirLight.color.setHSL(0.1, 1, 0.95);
        // dirLight.position.set(-1, 1.75, 1);
        // dirLight.position.multiplyScalar(5);
        // dirLight.castShadow = true;
        // dirLight.shadow.mapSize.width = 1024;
        // dirLight.shadow.mapSize.height = 1024;
        // dirLight.name = 'dirLight';
        // const d = 50;
        // dirLight.shadow.camera.left = -d;
        // dirLight.shadow.camera.right = d;
        // dirLight.shadow.camera.top = d;
        // dirLight.shadow.camera.bottom = -d;
        // dirLight.shadow.camera.far = 3500;
        // dirLight.shadow.bias = -0.0001;
        //
        // maze.add(dirLight);
        //
        // maze.add(new THREE.CameraHelper(dirLight.shadow.camera));
    }

    return maze
}

AFRAME.registerComponent('museum', {
    init: function() {
        const container = this.el.object3D

        container.add(generateMazeObject(world.worldGrid))

        Promise.all(
            '12345678'
                .split('')
                .map((x, i) =>
                    readPainting(x).then(p => (paintings[i + 1] = p))
                )
        ).then(() => {
            this.p = generatePaintings(world.worldGrid)
            container.add(this.p.object)
        })
    },
    tick: function() {
        this.p && this.p.update(world.tim)
    },
})

////////////////////////////
/// Start //////////////////
////////////////////////////
window.onload = () => {
    const { renderer } = document.getElementsByTagName('a-scene')[0]

    // renderer.shadowMap.enabled = true;
    // renderer.shadowMap.type = THREE.PCFSoftShadowMap;
}

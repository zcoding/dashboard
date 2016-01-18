# Vue-dashboard

## Components

### `modal`

#### props

+ `show` (required, twoWay)
+ `close-via-dimmer` (default:`false`)

#### slot

+ `header`
+ `body`
+ `footer`

### `alert`

#### props

+ `show` (required, twoWay)
+ `title` (default:'')

#### slot

only one

### `confirm`

#### props

+ `show` (required, twoWay)
+ `title` (default:'Question:')

#### slot

only one

#### events

+ `confirm-ok`
+ `confirm-cancel`

### `prompt`

#### props

+ `show` (required, twoWay)
+ `title` (default:'Input:')

#### slot

none

#### events

+ `prompt-ok`
+ `prompt-cancel`

### `panel`

#### props

+ `color` (default:'primary')

#### slot

+ `header`
+ `body`
+ `footer`

### `date-picker`

#### props

+ `date` (Number, default:new Date().getTime())

#### slot
none

### `date-input`

#### props

+ `date` (String, required)

#### slot
none

#### events

+ `date-change`

### `tab`

#### props

+ `active` (default:0)

#### slot

only one

### `tab-item`

#### props

+ `menu` (required)

#### slot

only one

### `tag-input`

#### props

+ `tags` (required, twoWay)
+ `color` (default:'dark')

#### slot

none

### `pagination`

#### props

+ `current` (Number, default:1)
+ `pageTotal` (default: 1)

#### slot
none

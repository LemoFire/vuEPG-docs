---
title: API
---

# API

## epg.move

按方向移动或移动到指定的 `EPGItem`

- 类型

```typescript
type MoveType = "right" | "left" | "down" | "up";
const move: (target: MoveType | HTMLElement | EPGItem) => any;
```

- 详细信息
  - `target`: "right" | "left" | "down" | "up" 或 EPGItem 或 EPGItem 的 HTMLElement

## epg.left

左移，等同于 `epg.move("left")`

## epg.right

右移，等同于 `epg.move("right")`

## epg.up

上移，等同于 `epg.move("up")`

## epg.down

下移，等同于 `epg.move("down")`

## epg.moveToItem

移动到指定 EPGItem

- 类型

```typescript
const moveToItem: (target: EPGItem) => void;
```

## epg.moveToGroup

移动到指定 EPGGroup 的第一个 EPGItem

- 类型

```typescript
const moveToGroup: (target: EPGGroup) => void;
```

## epg.getFoucsClass

获取默认的焦点 class

## epg.getCurrentItem

获取当前聚焦的 EPGItem

## epg.getCurrentGroup

获取当前聚焦的 EPGItem 所属的 EPGGroup

## epg.getItems

获取所有已注册的 EPGItem

## epg.getItemByHTMLElement

从 HTML 元素获取其 EPGItem

- 类型

```typescript
const getItemByHTMLElement: (element: HTMLElement) => EPGItem | null;
```

## epg.getItemsByGroup

获取指定 EPGGroup 下的所有 EPGItem

- 类型

```typescript
const getItemsByGroup: (group: EPGGroup) => HTMLElement[];
```

## epg.getGroups

获取所有已注册的 EPGGroup

## epg.getGroupByHTMLElement

获取指定 HTMLElement 的 EPGGroup

- 类型

```typescript
const getGroupByHTMLElement: (element: HTMLElement) => EPGGroup | null;
```

## epg.getGroupByItem

获取指定 EPGItem 的 EPGGroup

- 类型

```typescript
const getGroupByItem: (item: EPGItem) => EPGGroup | null;
```

## epg.getGroupChildrenByHTMLElement

获取 Group 的第一层子元素

- 类型

```typescript
const getGroupChildrenByHTMLElement: (
  element: HTMLElement | Node
) => (EPGGroup | EPGItem)[];
```

## epg.getGlobalGroupChildren

获取全局 GroupChildren

- 类型

```typescript
const getGlobalGroupChildren: () => (EPGItem | EPGGroup)[];
```

## epg.getParentsByHTMLElement

通过 HTMLElement 获取父 Group

- 类型

```typescript
const getParentsByHTMLElement: (element: HTMLElement) => HTMLElement[];
```

## epg.getParentGroupByHTMLElement

通过 HTMLElement 获取父 EPGGroup

- 类型

```typescript
const getParentGroupByHTMLElement: (element: HTMLElement) => EPGGroup | null;
```

## epg.getChild

通过 HTMLElement 获取 EPGGroup 或 EPGItem

- 类型

```typescript
const getChild: (element: HTMLElement) => (EPGItem | EPGGroup) | null;
```

## epg.isEPGItem

判断 HTMLElement 是否为 EPGItem

- 类型

```typescript
const isEPGItem: (element: HTMLElement) => boolean;
```

## epg.isEPGGroup

判断 HTMLElement 是否为 EPGGroup

- 类型

```typescript
const isEPGGroup: (element: HTMLElement) => boolean;
```

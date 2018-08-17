/**
 * 此文件根据 scripts/components-page.ejs 生成，不要手动修改
 */
import React from 'react'
import navable from 'docs/Navable'
import MarkDown from 'docs/MarkDown'

import locate from 'doc/locate'

import cn from 'doc/pages/components/Tree/cn.md'
import en from 'doc/pages/components/Tree/en.md'

const source = locate(cn, en)

const examples = [
  {
    name: '01-base',
    title: locate('基本用法 \n 基础的 Tree 用法', 'Base'),
    component: require('doc/pages/components/Tree/example-01-base.js').default,
    rawText: require('!raw-loader!doc/pages/components/Tree/example-01-base.js'),
  },
  {
    name: '02-icon',
    title: locate('图标 \n 在 renderItem 中根据状态展示不同的图标', 'Icons'),
    component: require('doc/pages/components/Tree/example-02-icon.js').default,
    rawText: require('!raw-loader!doc/pages/components/Tree/example-02-icon.js'),
  },
  {
    name: '03-click',
    title: locate('点击事件 \n 设置 onClick 属性监听节点点击', 'Click'),
    component: require('doc/pages/components/Tree/example-03-click.js').default,
    rawText: require('!raw-loader!doc/pages/components/Tree/example-03-click.js'),
  },
  {
    name: '04-noline',
    title: locate('无连接线 \n 设置 line 为 false，隐藏连接线', 'Line'),
    component: require('doc/pages/components/Tree/example-04-noline.js').default,
    rawText: require('!raw-loader!doc/pages/components/Tree/example-04-noline.js'),
  },
  {
    name: '05-expanded',
    title: locate('控制展开 \n 受控的展开（此示例数据量太大，第一次全部展开会比较慢）', 'Expanded'),
    component: require('doc/pages/components/Tree/example-05-expanded.js').default,
    rawText: require('!raw-loader!doc/pages/components/Tree/example-05-expanded.js'),
  },
  {
    name: '06-change',
    title: locate('可选择 \n 选中值取值提供了 4 种模式 \n 1: 只返回完全选中的节点，包含父节点 \n 2: 返回全部选中的节点和半选中的父节点 \n 3: 只返回选中的子节点 \n 4: 如果父节点选中，只返回父节点', 'onChange'),
    component: require('doc/pages/components/Tree/example-06-change.js').default,
    rawText: require('!raw-loader!doc/pages/components/Tree/example-06-change.js'),
  },
  {
    name: '07-disabled',
    title: locate('禁用 \n disabled 为函数时，根据返回结果禁用节点，同时禁用子节点 \n disabled 为 true 时，禁用全部节点', 'disabled'),
    component: require('doc/pages/components/Tree/example-07-disabled.js').default,
    rawText: require('!raw-loader!doc/pages/components/Tree/example-07-disabled.js'),
  },
  {
    name: '08-drag',
    title: locate('拖动 \n 设置 onDrop 属性可以拖动节点', 'Drag'),
    component: require('doc/pages/components/Tree/example-08-drag.js').default,
    rawText: require('!raw-loader!doc/pages/components/Tree/example-08-drag.js'),
  },
  {
    name: '09-lazyload',
    title: locate('动态加载 \n 数据过大，需要动态加载时，可以设置 loader 函数，当展开未定义 children（undefined）的节点时，触发此函数', 'Lazy load'),
    component: require('doc/pages/components/Tree/example-09-lazyload.js').default,
    rawText: require('!raw-loader!doc/pages/components/Tree/example-09-lazyload.js'),
  },
  {
    name: 'data',
    title: locate('', ''),
    component: require('doc/pages/components/Tree/example-data.js').default,
    rawText: require('!raw-loader!doc/pages/components/Tree/example-data.js'),
  },
]

const codes = undefined

export default navable(props => (
  <MarkDown {...props} codes={codes} source={source} examples={examples} />
))
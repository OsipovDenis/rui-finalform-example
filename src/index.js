import React from 'react'
import MyForm from './ui/MyForm'
import {render} from 'react-dom'
import {ApplyTheme} from 'rambler-ui/theme'

render(<ApplyTheme><MyForm /></ApplyTheme>, document.querySelector('.app'))

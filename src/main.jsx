import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const title = `React`

createRoot(document.getElementById('root')).render(<h1>Hello {title}</h1>)

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import './index.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Layout from './Layout';
import Github, { githubInfoLoader } from './components/Projects/Projects';
import Projects from './components/Projects/Projects'; 
import DsaHome from './components/dsa/pages/DsaHome';
import LeetCode from './components/dsa/pages/LeetCode';
import GFG from './components/dsa/pages/GFG';
import CodeChef from './components/dsa/pages/CodeChef';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='skills' element={<Skills />} />
      <Route path='projects' element={<Projects />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route
        path='github'
        loader={githubInfoLoader}
        element={<Github />}
      />
      <Route path='DsaHome' element={<DsaHome />} />

      <Route path="/leetcode" element={<LeetCode />} />
      <Route path="/gfg" element={<GFG />} />
      <Route path="/codechef" element={<CodeChef />} />

    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

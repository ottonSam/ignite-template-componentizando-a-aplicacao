import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function replayGenreID (number: number){
    setSelectedGenreId(number);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar replayGenreID={replayGenreID} selectedGenreId={selectedGenreId} />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  )
}
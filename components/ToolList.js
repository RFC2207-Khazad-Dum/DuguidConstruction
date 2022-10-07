import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ToolList({task, tools}) {
  return (
    tools.length>0 ? (
    <ul>
      {tools.map((tool, index) => (
        <li key={index}>{tool}</li>
      ))}
    </ul>
    ) : <>No tools needed</>
  )
}
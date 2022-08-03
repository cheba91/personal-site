import { Box } from '@mui/material';
import React from 'react';
import 'css-doodle';

export default function Background({ color, children }) {
   return (
      <>
         <Box
            className="backgroundBox"
            sx={{
               position: 'relative',
               overflow: 'hidden',
               minHeight: '100vh',
               background: 'rgba(0,0,0,.5)',
            }}
         >
            <css-doodle style={{ color: 'transparent' }} key={Math.random()}>
               {`
                :doodle {
                @grid: 1x3 / 98vmax;
                 position: absolute;
                 overflow: hidden;
                 top: 0; left: 0;
                z-index: -3;}
                @size: 100% 100%;
                background: @m(20, (
                  linear-gradient(transparent, @p(
                      ${color}@repeat(2, @p([0-9a-f]))
                  ))
                @r(0%, 100%) @r(0%, 100%) /
                @r(1px) @r(23vmin)
                no-repeat
                ));
                will-change: transform;
                animation: f 40s linear calc(-30s / @size() * @i()) infinite;
                @keyframes f {
                from { transform: translateY(-100%) }
                to { transform: translateY(100%) }
                }
                `}
            </css-doodle>
            <Box pt={13} />
            {children}
         </Box>
      </>
   );
}

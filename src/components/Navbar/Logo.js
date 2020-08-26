import React from "react";
import uuid from "react-uuid";

function Logo({ height, width, color1, color2, shadow }) {
  let lGID = uuid();
  let lGID2 = uuid();
  let PESID = uuid();
  let PESID2 = uuid();
  return (
    <svg
      width={width}
      height={height}
      viewBox='-11.292 10.6 522.584 128.8'
      style={{
        background: "0 0",
      }}
      // preserveAspectRatio='xMidYMid'
    >
      <defs>
        <linearGradient
          id={lGID}
          x1={0.043}
          x2={0.957}
          y1={0.297}
          y2={0.703}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor={color1} />
          <stop offset={0.5} stopColor={color2} />
          <stop offset={1} stopColor={color1} />
        </linearGradient>
        <linearGradient id={lGID2} x1={0} x2={0} y1={0} y2={1}>
          <stop offset={0.2} stopColor={color1} stopOpacity={0.8} />
          <stop offset={0.8} stopColor={color1} stopOpacity={0} />
        </linearGradient>
        <filter id={PESID2} x='-100%' y='-100%' width='300%' height='300%'>
          <feMorphology radius={2} />
        </filter>
        <filter id={PESID} x='-100%' y='-100%' width='300%' height='300%'>
          <feFlood floodColor={shadow} result='flood' />
          <feConvolveMatrix
            in='SourceGraphic'
            result='conv'
            order='8,8'
            divisor={1}
            kernelMatrix='0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0 0 1 0 0 0 0 1 0 0 1 1 0 0 1 1 0 0 0 0 1 1 0 0 0'
          />
          <feOffset dy={4} in='conv' result='offset' />
          <feComposite operator='in' in='flood' in2='offset' result='comp' />
          <feGaussianBlur in='offset' stdDeviation={3} result='shadow' />
          <feColorMatrix
            in='shadow'
            values='0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.3 0'
            result='dark-shadow'
          />
          <feOffset dy={4} in='dark-shadow' result='offset-shadow' />
          <feOffset dy={2} in='conv' result='offset-2' />
          <feComposite
            operator='out'
            in='offset'
            in2='offset-2'
            result='edge-diff'
          />
          <feGaussianBlur in='edge-diff' stdDeviation={1} result='edge-blur' />
          <feColorMatrix
            in='edge-blur'
            result='edge-shadow'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
          />
          <feComposite
            operator='in'
            in='edge-shadow'
            in2='offset'
            result='edge-shadow-in'
          />
          <feOffset dy={1} in='edge-shadow-in' result='edge-shadow-final' />
          <feMerge result='out'>
            {/* <feMergeNode in='offset-shadow' /> */}
            <feMergeNode in='comp' />
            {/* <feMergeNode in='edge-shadow-final' /> */}
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>
      <g filter={`url(#${PESID})`}>
        <path
          d='M51.25-31.44q-3.09 0-4.31-2.94-4.5 0-9.88 2.19-3.34 1.38-4.5 2.53-1.15 1.16-1.23 1.82-.08.65.64 1.11.72.45 2.01.85 1.3.41 3.02.82 9 2.09 11.41 2.9 4.78 1.6 7.15 3.5 2.25 1.91 2.25 5.19 0 2.72-1.67 4.59Q54.47-7 51.72-5.53q-2.75 1.47-6.14 2.61-3.39 1.14-7.16 1.95Q34.66-.16 31 .38q-7.16 1-12.22 1-9.22 0-14.22-2.22-1.87-.85-3.06-4.22Q.56-7.84.56-9.64q0-1.8.32-1.99.31-.18 1.28-.01.97.17 2.53.58l3.75 1q8.72 2.18 18.44 2.18 7.15 0 12.12-1.28 2.94-.78 3.13-1.75.12-.84-4.63-2.09-2.16-.59-5-1.25-13.78-3.34-16.62-4.31-2.85-.97-3.71-1.72-.86-.75-1.42-1.66-1.03-1.78-1.03-3.39t.17-2.48q.17-.88.49-1.63.65-1.53 1.65-2.09 8.03-4.5 23.6-7.91 13.84-3.06 22.78-3.06 1.81 0 2.72.62 1.56 1.16 1.37 2.47-.19 1.32-.8 2.43-.61 1.1-1.51 2-.91.89-2.02 1.56-1.11.67-2.29 1.11-2.38.87-4.63.87zm66.91 7.97q1 0 1 1.69 0 2.9-4.07 7.53l-1.78 1.81q-8.09 8.1-15.25 10.78-4.43 1.66-6.37-.15-1.6-1.53-2.53-4.94l-.75-2.72-6.66 4.09-3.84 2.19Q71.03.56 67.59.56q-4.4 0-7.34-3.4-2.81-3.22-2.81-7.47 0-4.19 3.34-7.47 4.78-4.69 15.1-8.6 9.75-3.65 15.75-3.65 2.03 0 2.03 2 0 1.37-.53 2.06-.54.69-2.19 1.41L87-22.88q-8.75 3.66-12.81 7.6-1.16 1.09-1.16 2.12t1.66 1.03q1.62 0 7.56-3.5l2.59-1.53q6.04-3.62 10.1-3.62 3.44 0 4.56 3.03.28.81.53 1.64.25.83.5 1.48.56 1.54 1.02 1.54.45 0 1.29-.46.85-.45 1.86-1.15 1.02-.71 2.11-1.55l3.78-3.03q5.04-4.19 7.57-4.19zM129.7-4.89q-2.98 1.58-6.06 2.56-3.08.99-5.76.99-2.69 0-6.07-2.44-.5 2.72-.92 5.42-.42 2.7-1.01 5.17-.6 2.47-1.49 4.6-.89 2.12-2.33 3.65-3.15 3.35-8.78 3.35-.87 0-1.44-.66-1-1.19-.81-2.7.19-1.52 1.19-4.33t2.53-6.2q1.53-3.39 3.44-7.21l4.03-7.69q-.69-1.62-.69-2.9 0-1.28.44-2.56.44-1.29 1.22-2.41 1.78-2.66 3.97-2.66.4 0 .84.1 8.19-13.88 9.41-15.82l1.72-2.68q4.81-7.1 9.12-8.5 1.47-.47 3-.47t2.52 1.06q.98 1.06.98 3.38 0 6.59-7.37 15.15l-8.13 9q-2.16 2.35-4.12 4.81 1.03 1.19 1.9 2.05.88.86 1.45.86.58 0 1.71-.39 1.12-.39 2.58-1.05 1.45-.65 3.11-1.51 1.65-.86 3.21-1.77 3.44-2 4.94-3.28 2.63-2.22 4.13-2.22 1.09 0 1.59.5.81.81.81 1.92 0 1.11-1.2 3.1-1.2 1.98-3.25 4.06-2.05 2.08-4.73 4.11-2.69 2.03-5.68 3.61zm51.77-18.08q1.5 0 1.5 1.69 0 1.12-.77 2.83-.76 1.7-2.2 3.18-1.44 1.49-3.3 3.08-1.86 1.6-4.34 3.35-2.48 1.75-5.48 3.46-3 1.72-6.38 3.1Q153.03.78 146.03.78q-5.34 0-9.34-2.78-4.19-2.91-4.19-7.06 0-6.53 7.03-12.41 6.06-5.06 14.28-7.84 5-1.69 8.47-1.69 2.81 0 4.75 1.37 2.06 1.5 2.06 4.04 0 3.96-6.28 8.78-1 .78-1.81 1.31l-1.12.75q-3.13 2.19-9.5 4.91 1.96 1.03 3.67 1.03 1.7 0 3.06-.41t3.08-1.16q1.72-.75 3.67-1.79 1.95-1.05 3.95-2.3 4.47-2.78 7.75-5.69 1.72-1.59 4.38-2.53.87-.28 1.53-.28zM147-14.19l1.72-.87q.84-.44 1.5-.82 6.31-3.62 7.19-4.46.87-.85.87-1.18 0-.32-.19-.76-.18-.44-.5-.78-.75-.88-1.59-.88-.84 0-1.86.31-1.01.32-2.05.86-1.03.55-1.98 1.32-.95.76-1.67 1.64-1.66 1.97-1.66 3.4 0 1.44.22 2.22zm58.25-3.12l-8.03 4.75q1.22-.53 2.87-.53 1.66 0 2.75.25 1.1.25 2.47.65 4.19 1.35 5.91 1.97l5.84 2.09q2.53.91 2.91.91 1.97 0 4.31-1.14 2.35-1.14 4.2-2.42 1.86-1.28 2.55-1.5.69-.22 1.44-.22t1.3.48q.54.49.45 1.38-.09.89-.52 1.89-.42 1-1.07 2.06-1.41 2.22-2.75 3.44l-2.82 2.41q-5.81 4.87-12.25 4.87-1.75 0-5.84-1.31l-9.66-3.13q-6.22-2.06-8.01-2.06-1.8 0-3.52.58t-3.47 1.25q-1.75.67-3.58 1.25-1.82.58-3.18.58T175.52.8q-.68-.39-1.21-1.02-1.34-1.5-1.22-2.67.13-1.17 1-2.24.88-1.06 2.16-2.15 1.28-1.1 2.8-2.17 1.51-1.08 2.92-1.99l4.03-2.5q.41-.25 1.75-1.12l16.38-11.19q7.59-5.38 7.59-5.63 0-.21-1.19-.21h-7.55q-3.1 0-4.89.03h-3.4q-5.66.06-6.38.33-.72.26-1.68.98l-2 1.37q-2.44 1.66-4.07 1.66-2.03 0-2.59-1.66-.53-1.56.5-2.98t2.2-2.5q1.17-1.08 2.63-2.08 1.45-1 2.89-1.75 3.19-1.69 4.65-1.69 1.47 0 3.49-.09 2.01-.09 4.56-.23t5.49-.36l5.87-.38q2.97-.19 5.78-.39t5.16-.36l4.06-.22q1.69-.09 2.23-.09.55 0 1.29.53.73.53 1.42 1.41 1.81 2.28 1.59 4.43-.15 1.79-9.4 8l-5.63 3.69-11.5 7.13zm61.78-1.94q0 1.69 2.88 1.69 2.12 0 5.56-2.07l2.5-1.37q1.16-.66 2.01-.66.86 0 1.36.53.5.54.5 1.47 0 .94-.62 2.18-.63 1.23-1.72 2.59-1.09 1.36-2.56 2.69-1.47 1.32-3.16 2.39-3.75 2.34-6.97 2.34-3.4 0-5.43-1.16-.63-.37-1.22-.78-3.35 3.82-9.69 7Q243.72.97 238.69.97q-5.28 0-8.35-4.16-2.46-3.37-2.46-6.84 0-5 5.34-9.53 3.94-3.32 7.61-5.03 3.67-1.72 6.64-2.66 6.28-1.97 11.31-1.97 2.25 0 4.02.86 1.76.86 2.61 1.73 2 1.97 2 5.04 0 .9-.19 1.4-.19.5-.19.94zm-25.56 5.91l-.03.09v.03q0 1.34.59 1.75 1.44.88 3.03.45 1.6-.42 3.03-1.04 3.57-1.53 6.44-3.88-.5-1-.5-2.06 0-2.25 1.97-4.5-2.5 0-6.75 2.34-4.69 2.6-7.03 5.35-.75.93-.75 1.47zm69.72-3.44q0 2.84 1.65 2.84 4.07 0 10.57-5.5l.84-.72q2.53-1.68 4.11-1.68 1.58 0 2 .46.42.47.42 1.5 0 2.32-2.34 4.91-3.5 4.25-9.6 8.06-7.06 4.44-12.65 4.44-3.91 0-4.91-4.34-.28-1.13-.4-2.16-.32-2.5-.66-2.78-.34-.28-1.36.05-1.02.32-2.41 1.09-1.39.77-3.07 1.86-8.94 5.94-10.29 6.78-3.21 2-4.34 2-1.12 0-2.2-.47t-1.89-1.19q-1.69-1.59-1.69-3.25 0-9.46 4.12-16.56 2.75-4.78 6.75-6.62 2.04-.97 4.38-.97 4.28 0 4.28 2.81 0 1.72-2.03 5.63l-.94 1.84q-1 1.91-.97 2.16.19.93.85.93.72 0 2.12-1.06l5.75-4.28 2.88-2q4.97-3.25 7.31-3.25 1.25 0 2.28 1 1.91 1.81 1.91 3.16 0 .43-.08 1.06-.08.62-.17 1.34l-.13 1.47q-.09.75-.09 1.44zm56.28-6.19q1.5 0 1.5 1.69 0 1.12-.77 2.83-.76 1.7-2.2 3.18-1.44 1.49-3.3 3.08-1.86 1.6-4.34 3.35-2.48 1.75-5.48 3.46-3 1.72-6.38 3.1Q339.03.78 332.03.78q-5.34 0-9.34-2.78-4.19-2.91-4.19-7.06 0-6.53 7.03-12.41 6.06-5.06 14.28-7.84 5-1.69 8.47-1.69 2.81 0 4.75 1.37 2.06 1.5 2.06 4.04 0 3.96-6.28 8.78-1 .78-1.81 1.31l-1.12.75q-3.13 2.19-9.5 4.91 1.96 1.03 3.67 1.03 1.7 0 3.06-.41t3.08-1.16q1.72-.75 3.67-1.79 1.95-1.05 3.95-2.3 4.47-2.78 7.75-5.69 1.72-1.59 4.38-2.53.87-.28 1.53-.28zM333-14.19l1.72-.87q.84-.44 1.5-.82 6.31-3.62 7.19-4.46.87-.85.87-1.18 0-.32-.19-.76-.18-.44-.5-.78-.75-.88-1.59-.88-.84 0-1.86.31-1.01.32-2.05.86-1.03.55-1.98 1.32-.95.76-1.67 1.64-1.66 1.97-1.66 3.4 0 1.44.22 2.22z'
          fill={`url(#${lGID})`}
          transform='translate(69.29 108.345)'
        />
      </g>
      <g filter={`url(#${PESID2})`}>
        <path
          d='M51.25-31.44q-3.09 0-4.31-2.94-4.5 0-9.88 2.19-3.34 1.38-4.5 2.53-1.15 1.16-1.23 1.82-.08.65.64 1.11.72.45 2.01.85 1.3.41 3.02.82 9 2.09 11.41 2.9 4.78 1.6 7.15 3.5 2.25 1.91 2.25 5.19 0 2.72-1.67 4.59Q54.47-7 51.72-5.53q-2.75 1.47-6.14 2.61-3.39 1.14-7.16 1.95Q34.66-.16 31 .38q-7.16 1-12.22 1-9.22 0-14.22-2.22-1.87-.85-3.06-4.22Q.56-7.84.56-9.64q0-1.8.32-1.99.31-.18 1.28-.01.97.17 2.53.58l3.75 1q8.72 2.18 18.44 2.18 7.15 0 12.12-1.28 2.94-.78 3.13-1.75.12-.84-4.63-2.09-2.16-.59-5-1.25-13.78-3.34-16.62-4.31-2.85-.97-3.71-1.72-.86-.75-1.42-1.66-1.03-1.78-1.03-3.39t.17-2.48q.17-.88.49-1.63.65-1.53 1.65-2.09 8.03-4.5 23.6-7.91 13.84-3.06 22.78-3.06 1.81 0 2.72.62 1.56 1.16 1.37 2.47-.19 1.32-.8 2.43-.61 1.1-1.51 2-.91.89-2.02 1.56-1.11.67-2.29 1.11-2.38.87-4.63.87zm66.91 7.97q1 0 1 1.69 0 2.9-4.07 7.53l-1.78 1.81q-8.09 8.1-15.25 10.78-4.43 1.66-6.37-.15-1.6-1.53-2.53-4.94l-.75-2.72-6.66 4.09-3.84 2.19Q71.03.56 67.59.56q-4.4 0-7.34-3.4-2.81-3.22-2.81-7.47 0-4.19 3.34-7.47 4.78-4.69 15.1-8.6 9.75-3.65 15.75-3.65 2.03 0 2.03 2 0 1.37-.53 2.06-.54.69-2.19 1.41L87-22.88q-8.75 3.66-12.81 7.6-1.16 1.09-1.16 2.12t1.66 1.03q1.62 0 7.56-3.5l2.59-1.53q6.04-3.62 10.1-3.62 3.44 0 4.56 3.03.28.81.53 1.64.25.83.5 1.48.56 1.54 1.02 1.54.45 0 1.29-.46.85-.45 1.86-1.15 1.02-.71 2.11-1.55l3.78-3.03q5.04-4.19 7.57-4.19zM129.7-4.89q-2.98 1.58-6.06 2.56-3.08.99-5.76.99-2.69 0-6.07-2.44-.5 2.72-.92 5.42-.42 2.7-1.01 5.17-.6 2.47-1.49 4.6-.89 2.12-2.33 3.65-3.15 3.35-8.78 3.35-.87 0-1.44-.66-1-1.19-.81-2.7.19-1.52 1.19-4.33t2.53-6.2q1.53-3.39 3.44-7.21l4.03-7.69q-.69-1.62-.69-2.9 0-1.28.44-2.56.44-1.29 1.22-2.41 1.78-2.66 3.97-2.66.4 0 .84.1 8.19-13.88 9.41-15.82l1.72-2.68q4.81-7.1 9.12-8.5 1.47-.47 3-.47t2.52 1.06q.98 1.06.98 3.38 0 6.59-7.37 15.15l-8.13 9q-2.16 2.35-4.12 4.81 1.03 1.19 1.9 2.05.88.86 1.45.86.58 0 1.71-.39 1.12-.39 2.58-1.05 1.45-.65 3.11-1.51 1.65-.86 3.21-1.77 3.44-2 4.94-3.28 2.63-2.22 4.13-2.22 1.09 0 1.59.5.81.81.81 1.92 0 1.11-1.2 3.1-1.2 1.98-3.25 4.06-2.05 2.08-4.73 4.11-2.69 2.03-5.68 3.61zm51.77-18.08q1.5 0 1.5 1.69 0 1.12-.77 2.83-.76 1.7-2.2 3.18-1.44 1.49-3.3 3.08-1.86 1.6-4.34 3.35-2.48 1.75-5.48 3.46-3 1.72-6.38 3.1Q153.03.78 146.03.78q-5.34 0-9.34-2.78-4.19-2.91-4.19-7.06 0-6.53 7.03-12.41 6.06-5.06 14.28-7.84 5-1.69 8.47-1.69 2.81 0 4.75 1.37 2.06 1.5 2.06 4.04 0 3.96-6.28 8.78-1 .78-1.81 1.31l-1.12.75q-3.13 2.19-9.5 4.91 1.96 1.03 3.67 1.03 1.7 0 3.06-.41t3.08-1.16q1.72-.75 3.67-1.79 1.95-1.05 3.95-2.3 4.47-2.78 7.75-5.69 1.72-1.59 4.38-2.53.87-.28 1.53-.28zM147-14.19l1.72-.87q.84-.44 1.5-.82 6.31-3.62 7.19-4.46.87-.85.87-1.18 0-.32-.19-.76-.18-.44-.5-.78-.75-.88-1.59-.88-.84 0-1.86.31-1.01.32-2.05.86-1.03.55-1.98 1.32-.95.76-1.67 1.64-1.66 1.97-1.66 3.4 0 1.44.22 2.22zm58.25-3.12l-8.03 4.75q1.22-.53 2.87-.53 1.66 0 2.75.25 1.1.25 2.47.65 4.19 1.35 5.91 1.97l5.84 2.09q2.53.91 2.91.91 1.97 0 4.31-1.14 2.35-1.14 4.2-2.42 1.86-1.28 2.55-1.5.69-.22 1.44-.22t1.3.48q.54.49.45 1.38-.09.89-.52 1.89-.42 1-1.07 2.06-1.41 2.22-2.75 3.44l-2.82 2.41q-5.81 4.87-12.25 4.87-1.75 0-5.84-1.31l-9.66-3.13q-6.22-2.06-8.01-2.06-1.8 0-3.52.58t-3.47 1.25q-1.75.67-3.58 1.25-1.82.58-3.18.58T175.52.8q-.68-.39-1.21-1.02-1.34-1.5-1.22-2.67.13-1.17 1-2.24.88-1.06 2.16-2.15 1.28-1.1 2.8-2.17 1.51-1.08 2.92-1.99l4.03-2.5q.41-.25 1.75-1.12l16.38-11.19q7.59-5.38 7.59-5.63 0-.21-1.19-.21h-7.55q-3.1 0-4.89.03h-3.4q-5.66.06-6.38.33-.72.26-1.68.98l-2 1.37q-2.44 1.66-4.07 1.66-2.03 0-2.59-1.66-.53-1.56.5-2.98t2.2-2.5q1.17-1.08 2.63-2.08 1.45-1 2.89-1.75 3.19-1.69 4.65-1.69 1.47 0 3.49-.09 2.01-.09 4.56-.23t5.49-.36l5.87-.38q2.97-.19 5.78-.39t5.16-.36l4.06-.22q1.69-.09 2.23-.09.55 0 1.29.53.73.53 1.42 1.41 1.81 2.28 1.59 4.43-.15 1.79-9.4 8l-5.63 3.69-11.5 7.13zm61.78-1.94q0 1.69 2.88 1.69 2.12 0 5.56-2.07l2.5-1.37q1.16-.66 2.01-.66.86 0 1.36.53.5.54.5 1.47 0 .94-.62 2.18-.63 1.23-1.72 2.59-1.09 1.36-2.56 2.69-1.47 1.32-3.16 2.39-3.75 2.34-6.97 2.34-3.4 0-5.43-1.16-.63-.37-1.22-.78-3.35 3.82-9.69 7Q243.72.97 238.69.97q-5.28 0-8.35-4.16-2.46-3.37-2.46-6.84 0-5 5.34-9.53 3.94-3.32 7.61-5.03 3.67-1.72 6.64-2.66 6.28-1.97 11.31-1.97 2.25 0 4.02.86 1.76.86 2.61 1.73 2 1.97 2 5.04 0 .9-.19 1.4-.19.5-.19.94zm-25.56 5.91l-.03.09v.03q0 1.34.59 1.75 1.44.88 3.03.45 1.6-.42 3.03-1.04 3.57-1.53 6.44-3.88-.5-1-.5-2.06 0-2.25 1.97-4.5-2.5 0-6.75 2.34-4.69 2.6-7.03 5.35-.75.93-.75 1.47zm69.72-3.44q0 2.84 1.65 2.84 4.07 0 10.57-5.5l.84-.72q2.53-1.68 4.11-1.68 1.58 0 2 .46.42.47.42 1.5 0 2.32-2.34 4.91-3.5 4.25-9.6 8.06-7.06 4.44-12.65 4.44-3.91 0-4.91-4.34-.28-1.13-.4-2.16-.32-2.5-.66-2.78-.34-.28-1.36.05-1.02.32-2.41 1.09-1.39.77-3.07 1.86-8.94 5.94-10.29 6.78-3.21 2-4.34 2-1.12 0-2.2-.47t-1.89-1.19q-1.69-1.59-1.69-3.25 0-9.46 4.12-16.56 2.75-4.78 6.75-6.62 2.04-.97 4.38-.97 4.28 0 4.28 2.81 0 1.72-2.03 5.63l-.94 1.84q-1 1.91-.97 2.16.19.93.85.93.72 0 2.12-1.06l5.75-4.28 2.88-2q4.97-3.25 7.31-3.25 1.25 0 2.28 1 1.91 1.81 1.91 3.16 0 .43-.08 1.06-.08.62-.17 1.34l-.13 1.47q-.09.75-.09 1.44zm56.28-6.19q1.5 0 1.5 1.69 0 1.12-.77 2.83-.76 1.7-2.2 3.18-1.44 1.49-3.3 3.08-1.86 1.6-4.34 3.35-2.48 1.75-5.48 3.46-3 1.72-6.38 3.1Q339.03.78 332.03.78q-5.34 0-9.34-2.78-4.19-2.91-4.19-7.06 0-6.53 7.03-12.41 6.06-5.06 14.28-7.84 5-1.69 8.47-1.69 2.81 0 4.75 1.37 2.06 1.5 2.06 4.04 0 3.96-6.28 8.78-1 .78-1.81 1.31l-1.12.75q-3.13 2.19-9.5 4.91 1.96 1.03 3.67 1.03 1.7 0 3.06-.41t3.08-1.16q1.72-.75 3.67-1.79 1.95-1.05 3.95-2.3 4.47-2.78 7.75-5.69 1.72-1.59 4.38-2.53.87-.28 1.53-.28zM333-14.19l1.72-.87q.84-.44 1.5-.82 6.31-3.62 7.19-4.46.87-.85.87-1.18 0-.32-.19-.76-.18-.44-.5-.78-.75-.88-1.59-.88-.84 0-1.86.31-1.01.32-2.05.86-1.03.55-1.98 1.32-.95.76-1.67 1.64-1.66 1.97-1.66 3.4 0 1.44.22 2.22z'
          fill={`url(#${lGID2})`}
          transform='translate(69.313 108.345)'
        />
      </g>
      <style />
    </svg>
  );
}

export default Logo;
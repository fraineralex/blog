export default function Squiggle () {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='0' width='0'>
      <defs>
        <filter id='squiggle'>
          <feTurbulence
            type='fractalNoise'
            id='turbulence'
            baseFrequency='.05'
            numOctaves='4'
          />
          <feDisplacementMap id='displacement' in='SourceGraphic' scale='4' />
        </filter>
      </defs>
    </svg>
  )
}

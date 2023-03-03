<template>
    <div>
        <svg id="svgfilters" aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<defs>
			<filter id="teal-white" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feColorMatrix type="matrix" values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
				<feComponentTransfer in="colormatrix" result="componentTransfer">
					<feFuncR type="table" tableValues="0.03 1"/>
					<feFuncG type="table" tableValues="0.57 1"/>
					<feFuncB type="table" tableValues="0.49 1"/>
					<feFuncA type="table" tableValues="0 1"/>
				</feComponentTransfer>
				<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
			</filter>
			<filter id="teal-lightgreen" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feColorMatrix type="matrix" values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
				<feComponentTransfer in="colormatrix" result="componentTransfer">
					<feFuncR type="table" tableValues="0.03 0.8"/>
					<feFuncG type="table" tableValues="0.57 1"/>
					<feFuncB type="table" tableValues="0.49 0.53"/>
					<feFuncA type="table" tableValues="0 1"/>
				</feComponentTransfer>
				<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
			</filter>
			<filter id="sepia" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feColorMatrix type="matrix" values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
				<feComponentTransfer in="colormatrix" result="componentTransfer">
					<feFuncR type="table" tableValues="0.26 0.95"/>
					<feFuncG type="table" tableValues="0.19 0.78"/>
					<feFuncB type="table" tableValues="0.11 0.59"/>
					<feFuncA type="table" tableValues="0 1"/>
				</feComponentTransfer>
				<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
			</filter>
			<filter id="purple-sepia" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feColorMatrix type="matrix" values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
				<feComponentTransfer in="colormatrix" result="componentTransfer">
					<feFuncR type="table" tableValues="0.43 0.97"/>
					<feFuncG type="table" tableValues="0.06 0.88"/>
					<feFuncB type="table" tableValues="0.37 0.79"/>
					<feFuncA type="table" tableValues="0 1"/>
				</feComponentTransfer>
				<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
			</filter>
			<filter id="cherry-icecream" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feColorMatrix type="matrix" values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
				<feComponentTransfer in="colormatrix" result="componentTransfer">
					<feFuncR type="table" tableValues="0.84 1"/>
					<feFuncG type="table" tableValues="0.05 0.94"/>
					<feFuncB type="table" tableValues="0.37 0.61"/>
					<feFuncA type="table" tableValues="0 1"/>
				</feComponentTransfer>
				<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
			</filter>
			<filter id="blackCurrant-and-mint" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feColorMatrix type="matrix" values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
				<feComponentTransfer in="colormatrix" result="componentTransfer">
					<feFuncR type="table" tableValues="0.75 0.53"/>
					<feFuncG type="table" tableValues="0.25 0.97"/>
					<feFuncB type="table" tableValues="0.64 0.77"/>
					<feFuncA type="table" tableValues="0 1"/>
				</feComponentTransfer>
				<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
			</filter>
			<filter id="sea" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feColorMatrix type="matrix" values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
				<feComponentTransfer in="colormatrix" result="componentTransfer">
					<feFuncR type="table" tableValues="0.02 0.13 0.8"/>
					<feFuncG type="table" tableValues="0.02 0.47 0.97"/>
					<feFuncB type="table" tableValues="0.26 0.52 0.48"/>
					<feFuncA type="table" tableValues="0 1"/>
				</feComponentTransfer>
				<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
			</filter>
			<filter id="warm-sea" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feColorMatrix type="matrix" values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
				<feComponentTransfer in="colormatrix" result="componentTransfer">
					<feFuncR type="table" tableValues="0.29 0.01 0.97"/>
					<feFuncG type="table" tableValues="0.12 0.52 0.94"/>
					<feFuncB type="table" tableValues="0.37 0.59 0.47"/>
					<feFuncA type="table" tableValues="0 1"/>
				</feComponentTransfer>
				<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
			</filter>
			<filter id="spring-grass" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feColorMatrix type="matrix" values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
				<feComponentTransfer in="colormatrix" result="componentTransfer">
					<feFuncR type="table" tableValues="0 0.38 0.92"/>
					<feFuncG type="table" tableValues="0.5 0.8 1"/>
					<feFuncB type="table" tableValues="0.5 0.56 0.74"/>
					<feFuncA type="table" tableValues="0 1"/>
				</feComponentTransfer>
				<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
			</filter>
			<filter id="red-sunset-with-purple" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feColorMatrix type="matrix" values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
				<feComponentTransfer in="colormatrix" result="componentTransfer">
					<feFuncR type="table" tableValues="0.52 0.86 0.97"/>
					<feFuncG type="table" tableValues="0 0.08 0.81"/>
					<feFuncB type="table" tableValues="0.51 0.24 0.05"/>
					<feFuncA type="table" tableValues="0 1"/>
				</feComponentTransfer>
				<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
			</filter>
			<filter id="red-sunset" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feColorMatrix type="matrix" values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
				<feComponentTransfer in="colormatrix" result="componentTransfer">
					<feFuncR type="table" tableValues="0.27 0.86 0.97"/>
					<feFuncG type="table" tableValues="0.01 0.08 0.81"/>
					<feFuncB type="table" tableValues="0.02 0.24 0.05"/>
					<feFuncA type="table" tableValues="0 1"/>
				</feComponentTransfer>
				<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
			</filter>
			<filter id="gold-sunset" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feColorMatrix type="matrix" values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
				<feComponentTransfer in="colormatrix" result="componentTransfer">
					<feFuncR type="table" tableValues="0.27 0.86 1"/>
					<feFuncG type="table" tableValues="0.01 0.31 0.95"/>
					<feFuncB type="table" tableValues="0.02 0.02 0.02"/>
					<feFuncA type="table" tableValues="0 1"/>
				</feComponentTransfer>
				<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
			</filter>
			<filter id="dark-crimson-sepia" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feColorMatrix type="matrix" values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
				<feComponentTransfer in="colormatrix" result="componentTransfer">
					<feFuncR type="table" tableValues="0.01 0.52 0.97"/>
					<feFuncG type="table" tableValues="0 0.05 0.81"/>
					<feFuncB type="table" tableValues="0.02 0.29 0.61"/>
					<feFuncA type="table" tableValues="0 1"/>
				</feComponentTransfer>
				<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
			</filter>
			<filter id="dark-blue-sepia" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feColorMatrix type="matrix" values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
				<feComponentTransfer in="colormatrix" result="componentTransfer">
					<feFuncR type="table" tableValues="0.29 0.15 0.97"/>
					<feFuncG type="table" tableValues="0.04 0.39 0.93"/>
					<feFuncB type="table" tableValues="0.32 0.52 0.73"/>
					<feFuncA type="table" tableValues="0 1"/>
				</feComponentTransfer>
				<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
			</filter>
			<filter id="dark-green-sepia" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feColorMatrix type="matrix" values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
				<feComponentTransfer in="colormatrix" result="componentTransfer">
					<feFuncR type="table" tableValues="0.25 0.39 0.96"/>
					<feFuncG type="table" tableValues="0.16 0.52 0.97"/>
					<feFuncB type="table" tableValues="0.06 0.39 0.78"/>
					<feFuncA type="table" tableValues="0 1"/>
				</feComponentTransfer>
				<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
			</filter>
			<filter id="x-rays" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feColorMatrix type="matrix" values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
				<feComponentTransfer in="colormatrix" result="componentTransfer">
					<feFuncR type="table" tableValues="0.98 0.3 0.25"/>
					<feFuncG type="table" tableValues="1 0.44 0.24"/>
					<feFuncB type="table" tableValues="0.91 0.62 0.39"/>
					<feFuncA type="table" tableValues="0 1"/>
				</feComponentTransfer>
				<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
			</filter>
			<filter id="warm-x-rays" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feColorMatrix type="matrix" values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
				<feComponentTransfer in="colormatrix" result="componentTransfer">
					<feFuncR type="table" tableValues="0.98 0.75 0.51"/>
					<feFuncG type="table" tableValues="1 0.45 0.11"/>
					<feFuncB type="table" tableValues="0.91 0.39 0.29"/>
					<feFuncA type="table" tableValues="0 1"/>
				</feComponentTransfer>
				<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
			</filter>
			<filter id="golden-x-rays" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feColorMatrix type="matrix" values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
				<feComponentTransfer in="colormatrix" result="componentTransfer">
					<feFuncR type="table" tableValues="0.98 1 0.94"/>
					<feFuncG type="table" tableValues="1 0.98 0.44"/>
					<feFuncB type="table" tableValues="0.91 0.43 0.02"/>
					<feFuncA type="table" tableValues="0 1"/>
				</feComponentTransfer>
				<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
			</filter>
			<filter id="purple-warm" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feColorMatrix type="matrix" values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
				<feComponentTransfer in="colormatrix" result="componentTransfer">
					<feFuncR type="table" tableValues="0.52 0.97 1"/>
					<feFuncG type="table" tableValues="0 0.62 1"/>
					<feFuncB type="table" tableValues="0.51 0.39 0.89"/>
					<feFuncA type="table" tableValues="0 1"/>
				</feComponentTransfer>
				<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
			</filter>
			<filter id="green-pink-acid" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feColorMatrix type="matrix" values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
				<feComponentTransfer in="colormatrix" result="componentTransfer">
					<feFuncR type="table" tableValues="1 0.98 0.1"/>
					<feFuncG type="table" tableValues="0.17 1 0.82"/>
					<feFuncB type="table" tableValues="0.7 0.84 0.67"/>
					<feFuncA type="table" tableValues="0 1"/>
				</feComponentTransfer>
				<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
			</filter>
			<filter id="yellow-blue-acid" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feColorMatrix type="matrix" values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
				<feComponentTransfer in="colormatrix" result="componentTransfer">
					<feFuncR type="table" tableValues="0.01 0.97 0.89"/>
					<feFuncG type="table" tableValues="0.38 1 1"/>
					<feFuncB type="table" tableValues="1 0.89 0.01"/>
					<feFuncA type="table" tableValues="0 1"/>
				</feComponentTransfer>
				<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
			</filter>
			<filter id="noise" x="0%" y="0%" width="100%" height="100%">
				<feTurbulence baseFrequency="0.01 0.4" result="NOISE" numOctaves="2" />
				<feDisplacementMap in="SourceGraphic" in2="NOISE" scale="20" xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
			</filter>
			<filter id="squiggly-0">
				<feTurbulence id="turbulence1" baseFrequency="0.02" numOctaves="3" result="noise" seed="0" />
				<feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
			</filter>
			<filter id="squiggly-1">
				<feTurbulence id="turbulence2" baseFrequency="0.02" numOctaves="3" result="noise" seed="1" />
				<feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
			</filter>
			<filter id="squiggly-2">
				<feTurbulence id="turbulence3" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
				<feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
			</filter>
			<filter id="squiggly-3">
				<feTurbulence id="turbulence4" baseFrequency="0.02" numOctaves="3" result="noise" seed="3" />
				<feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
			</filter>
			<filter id="squiggly-4">
				<feTurbulence id="turbulence5" baseFrequency="0.02" numOctaves="3" result="noise" seed="4" />
				<feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
			</filter>
			<filter id="posterize">
				<feComponentTransfer>
					<feFuncR type="discrete" tableValues="0 .5 1" />
				</feComponentTransfer>
			</filter>
			<filter id="dancing" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
				<feMorphology operator="dilate" radius="4 4" in="SourceAlpha" result="morphology"/>
				<feFlood flood-color="#30597E" flood-opacity="1" result="flood"/>
				<feComposite in="flood" in2="morphology" operator="in" result="composite"/>
				<feComposite in="composite" in2="SourceAlpha" operator="out" result="composite1"/>
				<feTurbulence type="fractalNoise" baseFrequency="0.01 0.02" numOctaves="1" seed="0" stitchTiles="stitch" result="turbulence"/>
				<feDisplacementMap in="composite1" in2="turbulence" scale="17" xChannelSelector="A" yChannelSelector="A" result="displacementMap"/>
				<feMerge result="merge">
					<feMergeNode in="SourceGraphic"/>
					<feMergeNode in="displacementMap"/>
					</feMerge>
			</filter>
			<filter id="drops" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feTurbulence type="turbulence" baseFrequency="0.05 0.05" numOctaves="1" seed="3" stitchTiles="stitch" result="turbulence"/>
				<feComposite in="turbulence" in2="SourceGraphic" operator="in" result="composite"/>
				<feColorMatrix type="matrix" values="1 0 0 0 0
					0 1 0 0 0
					0 0 1 0 0
					0 0 0 25 -2" in="composite" result="colormatrix"/>
				<feComposite in="SourceGraphic" in2="colormatrix" operator="in" result="composite1"/>
				<feGaussianBlur stdDeviation="3 3" in="composite1" result="blur"/>
				<feSpecularLighting surfaceScale="2" specularConstant="1" specularExponent="20" lighting-color="#fffffd" in="blur" result="specularLighting">
					<feDistantLight azimuth="-90" elevation="150"/>
				</feSpecularLighting>
				<feSpecularLighting surfaceScale="2" specularConstant="1" specularExponent="20" lighting-color="#cae1fe" in="blur" result="specularLighting1">
					<feDistantLight azimuth="90" elevation="150"/>
				</feSpecularLighting>
				<feSpecularLighting surfaceScale="7" specularConstant="1" specularExponent="35" lighting-color="#fcfeff" in="blur" result="specularLighting2">
					<fePointLight x="150" y="50" z="300"/>
				</feSpecularLighting>
				<feComposite in="specularLighting" in2="composite1" operator="in" result="composite2"/>
				<feComposite in="specularLighting2" in2="composite1" operator="in" result="composite3"/>
				<feComposite in="specularLighting1" in2="composite1" operator="in" result="composite4"/>
				<feBlend mode="multiply" in="composite4" in2="SourceGraphic" result="blend"/>
				<feBlend in="composite2" in2="blend" result="blend1"/>
				<feBlend in="composite3" in2="blend1" result="blend2"/>
			</filter>
			<filter id="grain">
				<feTurbulence baseFrequency="0.60,0.90" result="colorNoise" />
				<feColorMatrix in="colorNoise" type="matrix" values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"/>
				<feComposite operator="in" in2="SourceGraphic" result="monoNoise"/>
				<feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
			</filter>
			<filter id="fluffy" x="0%" y="0%" width="100%" height="100%">
				 <feTurbulence type="fractalNoise" baseFrequency="0.04" result="fluffyNoise" numOctaves="5" />
				<feColorMatrix in="fluffyNoise" type="matrix" values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"/>
				<feComposite operator="in" in2="SourceGraphic" result="monoFluffyNoise"/>
				<feBlend in="SourceGraphic" in2="monoFluffyNoise" mode="screen" />
			</filter>
		</defs>
	</svg>
        <div id="ol-map"></div>

        <el-select v-model="value" placeholder="请选择" class="dropdown" :popper-append-to-body="false" popper-class="layerOption">
        <el-option
            v-for="item in Layers"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            @click.native="changeLayer(item.value)">
            </el-option>
        </el-select>

		<el-popover
			placement="right" 
			width="320"
			trigger="click" class="ol-draw-select" :append-to-body="false" popper-class="buttonOption">
			<el-row>
			<el-button circle @click.native="addInteractions('Point')"><i class="water-points"></i></el-button>
			<el-button circle @click.native="addInteractions('LineString')"><i class="water-line"></i></el-button>
			<el-button circle @click.native="addInteractions('Polygon')"><i class="water-polygon"></i></el-button>
			<el-button circle @click.native="addInteractions('Circle')"><i class="water-circle"></i></el-button>
			<el-button type="danger" circle icon="el-icon-circle-close" @click.native="addInteractions('End')"></el-button>
			</el-row>
			<el-button slot="reference" circle><i class="water-drawing"></i></el-button>
		</el-popover>
		<el-popover
			placement="right" 
			width="270"
			trigger="click" class="ol-measure-select" :append-to-body="false" popper-class="buttonOption">
			<el-row>
			<el-button circle @click.native="measureChange('Coordinate')"><i class="water-coordinate"></i></el-button>
			<el-button circle @click.native="measureChange('LineString')"><i class="water-length"></i></el-button>
			<el-button circle @click.native="measureChange('Polygon')"><i class="water-area"></i></el-button>
			<el-button type="danger" circle icon="el-icon-circle-close"  @click.native="measureChange('End')"></el-button>
			</el-row>
			<el-low>
				<label for="segments" class="text">Show segment lengths:&nbsp;</label>
				<input type="checkbox" id="segments" checked />
				<br/>
				<label for="clear" class="text">Clear previous measure:&nbsp;</label>
				<input type="checkbox" id="clear" checked />
			</el-low>
			<el-button slot="reference" circle><i class="water-measure"></i></el-button>
		</el-popover>
    </div>
</template>

<script>
import Map from 'ol/Map'
import View from 'ol/View'
import { defaults as Defaults } from 'ol/control.js'
import TileLayer from 'ol/layer/Tile'
import { Vector as VectorSource } from 'ol/source';
import { Vector as VectorLayer } from 'ol/layer';
import XYZ from 'ol/source/XYZ'
import {Control, defaults as defaultControls} from 'ol/control';
import {
	Circle as CircleStyle,
	Fill,  
	RegularShape,
	Stroke,
	Style,
	Text,
} from 'ol/style'
import { LineString, Point} from 'ol/geom'
import {Draw, Modify, Snap} from 'ol/interaction';
import {get, fromLonLat, toLonLat } from 'ol/proj';
import { getArea, getLength} from 'ol/sphere';

// 天地图服务url -> XYZ
var vecSource = new XYZ({
    url: 'http://t7.tianditu.com/DataServer?T=vec_w&tk=f5347cab4b28410a6e8ba5143e3d5a35&x={x}&y={y}&l={z}'
});
var cvaSource = new XYZ({
    url: 'http://t7.tianditu.com/DataServer?T=cva_w&tk=f5347cab4b28410a6e8ba5143e3d5a35&x={x}&y={y}&l={z}'
});
var imgSource = new XYZ({
    url: 'http://t7.tianditu.com/DataServer?T=img_w&tk=f5347cab4b28410a6e8ba5143e3d5a35&x={x}&y={y}&l={z}'
});
var ciaSource = new XYZ({
    url: 'http://t7.tianditu.com/DataServer?T=cia_w&tk=f5347cab4b28410a6e8ba5143e3d5a35&x={x}&y={y}&l={z}'
});
var terSource = new XYZ({
    url: 'http://t7.tianditu.com/DataServer?T=ter_w&tk=f5347cab4b28410a6e8ba5143e3d5a35&x={x}&y={y}&l={z}'
});
var ctaSource = new XYZ({
    url: 'http://t7.tianditu.com/DataServer?T=cta_w&tk=f5347cab4b28410a6e8ba5143e3d5a35&x={x}&y={y}&l={z}'
});

// 辅助函数
function lonlat2XY(geometry){
	var coordinates = geometry.getCoordinates();
	var length = coordinates.length;
	var new_coordinates = Array(length);
	for (var i = 0; i < length; i++){
		console.log('3', coordinates[i])
		new_coordinates[i] = fromLonLat(coordinates[i], 'EPSG:3857');
		console.log('4', new_coordinates[i])
	}
	geometry.setCoordinates(new_coordinates);
	return geometry;
};

function XY2lonlat(geometry){
	var coordinates = geometry.getCoordinates();
	var length = coordinates.length;
	for (var i = 0; i < length; i++){
		coordinates[i] = toLonLat(coordinates[i]);
	}
	geometry.setCoordinates(coordinates);
	return geometry;
}

// 矢量图层
var DvecLayer = new TileLayer({
    className: "DarkvecLayerClass",
    title: '全球矢量地图服务(深色调)',
    source: vecSource
});
var LvecLayer = new TileLayer({
    title: '全球矢量地图服务(浅色调)',
    source: vecSource
});
var cvaLayer = new TileLayer({
    title: '全球矢量注记服务',
    source: cvaSource
})

// 影像图层
var imgLayer = new TileLayer({
    title: '全球影像地图服务',
    source: imgSource
});
var ciaLayer = new TileLayer({
    title: '全球影像注记服务',
    source: ciaSource,
})

// 地形图层
var terLayer = new TileLayer({
    title: '全球地形晕渲地图服务',
    source: terSource
});
var ctaLayer = new TileLayer({
    title: '全球地形晕渲注记服务',
    source: ctaSource
})

// 绘制图层
var drawSource = new VectorSource({});
var drawLayer = new VectorLayer({
	source: drawSource,
	style: {
		'fill-color': 'rgba(218, 245, 255, 0.7)',
		'stroke-color': '#1296db',
		'stroke-width': 2,
		'circle-radius': 7,
		'circle-fill-color': '#1296db',
	},
});
const modify = new Modify({source: drawSource});
let draw, snap;


// 测量图层
var showSegments = document.getElementById('segments');
var clearPrevious = document.getElementById('clear');

const style = new Style({
  fill: new Fill({
    color: 'rgba(218, 245, 255, 0.7)',
  }),
  stroke: new Stroke({
    color: '#1296db',
    lineDash: [10, 10],
    width: 2,
  }),
  image: new CircleStyle({
    radius: 5,
    stroke: new Stroke({
      color: 'rgba(0, 0, 0, 0.7)',
    }),
    fill: new Fill({
      color: 'rgba(255, 255, 255, 0.2)',
    }),
  }),
});

const labelStyle = new Style({
  text: new Text({
    font: '14px Calibri,sans-serif',
    fill: new Fill({
      color: 'rgba(255, 255, 255, 1)',
    }),
    backgroundFill: new Fill({
      color: 'rgba(255, 255, 255, 0.2)',
    }),
    padding: [3, 3, 3, 3],
    textBaseline: 'bottom',
    offsetY: -15,
  }),
  image: new RegularShape({
    radius: 8,
    points: 3,
    angle: Math.PI,
    displacement: [0, 10],
    fill: new Fill({
      color: 'rgba(0, 0, 0, 0.7)',
    }),
  }),
});

const tipStyle = new Style({
  text: new Text({
    font: '12px Calibri,sans-serif',
    fill: new Fill({
      color: 'rgba(255, 255, 255, 1)',
    }),
    backgroundFill: new Fill({
      color: 'rgba(0, 0, 0, 0.7)',
    }),
    padding: [2, 2, 2, 2],
    textAlign: 'left',
    offsetX: 15,
  }),
});

const modifyStyle = new Style({
  image: new CircleStyle({
    radius: 5,
    stroke: new Stroke({
      color: 'rgba(0, 0, 0, 0.7)',
    }),
    fill: new Fill({
      color: 'rgba(218, 245, 255, 0.7)',
    }),
  }),
  text: new Text({
    text: 'Drag to modify',
    font: '12px Calibri,sans-serif',
    fill: new Fill({
      color: 'rgba(255, 255, 255, 1)',
    }),
    backgroundFill: new Fill({
      color: 'rgba(0, 0, 0, 0.7)',
    }),
    padding: [2, 2, 2, 2],
    textAlign: 'left',
    offsetX: 15,
  }),
});

const segmentStyle = new Style({
  text: new Text({
    font: '12px Calibri,sans-serif',
    fill: new Fill({
      color: 'rgba(255, 255, 255, 1)',
    }),
    backgroundFill: new Fill({
      color: 'rgba(0, 0, 0, 0.4)',
    }),
    padding: [2, 2, 2, 2],
    textBaseline: 'bottom',
    offsetY: -12,
  }),
  image: new RegularShape({
    radius: 6,
    points: 3,
    angle: Math.PI,
    displacement: [0, 8],
    fill: new Fill({
      color: 'rgba(0, 0, 0, 0.4)',
    }),
  }),
});

const segmentStyles = [segmentStyle];

const formatLength = function (line) {
  const length = getLength(line, {projection: 'EPSG:4326'});
  let output;
  if (length > 100) {
    output = Math.round((length / 1000) * 100) / 100 + ' km';
  } else {
    output = Math.round(length * 100) / 100 + ' m';
  }
  return output;
};

const formatArea = function (polygon) {
  const area = getArea(polygon, {projection: 'EPSG:4326'});
  let output;
  if (area > 10000) {
    output = Math.round((area / 1000000) * 100) / 100 + ' km\xB2';
  } else {
    output = Math.round(area * 100) / 100 + ' m\xB2';
  }
  return output;
};

const measureSource = new VectorSource();
const measureModify = new Modify({
	source: measureSource,
	style: modifyStyle
});

let tipPoint;

function styleFunction(feature, segments, drawType, tip) {
  const styles = [style];
  var geometry = feature.getGeometry();
  console.log('1',geometry.getLastCoordinate())

  const type = geometry.getType();
  let point, label, line;
  if (!drawType || drawType === type) {
    if (type === 'Polygon') {
      point = geometry.getInteriorPoint();
      label = formatArea(geometry);
      line = new LineString(geometry.getCoordinates()[0]);
    } else if (type === 'LineString') {
      point = new Point(geometry.getLastCoordinate());
      label = formatLength(geometry);
      line = geometry;
    }
  }
  
  if (segments && line) {
    let count = 0;
    line.forEachSegment(function (a, b) {
      var segment = new LineString([a, b]);
	//   segment = XY2lonlat(segment);
      const label = formatLength(segment);
      if (segmentStyles.length - 1 < count) {
        segmentStyles.push(segmentStyle.clone());
      }
      const segmentPoint = new Point(segment.getCoordinateAt(0.5));
      segmentStyles[count].setGeometry(segmentPoint);
      segmentStyles[count].getText().setText(label);
      styles.push(segmentStyles[count]);
      count++;
    });
  }
  if (label) {
    labelStyle.setGeometry(point);
    labelStyle.getText().setText(label);
    styles.push(labelStyle);
  }
  if (
    tip &&
    type === 'Point' &&
    !modify.getOverlay().getSource().getFeatures().length
  ) {
    tipPoint = geometry;
    tipStyle.getText().setText(tip);
    styles.push(tipStyle);
  }
  return styles;
}

var measureLayer = new VectorLayer({
	source: measureSource,
	style: function(feature){
		return styleFunction(feature, showSegments.checked);
	},
});

let measureDraw;

export default {
  name: 'olMap',
  created(){
	this.$nextTick(()=>{
		showSegments = document.getElementById('segments');
		clearPrevious = document.getElementById('clear');
	})
  },
  data () {
    return {
      // 地图实例对象
      map: null,
      Layers:[
        {
            label: '矢量地图(深色)',
            value: 'dark',
        },
        {
            label: '矢量地图(浅色)',
            value: 'light',
        },
        {
            label: '影像底图',
            value: 'img',
        },
        {
            label: '地形渲染图',
            value: 'ter',
        },
      ],
      value: 'dark',
	  checkList:['segment', 'clear'],

    }
  },
  mounted () {
    // 窗口拖拉，更新地图大小
    window.addEventListener('resize', () => {
      if (this.map) {
        this.map.updateSize()
      }
    })
    this.$nextTick(() => {
      this.initMap()
    })
  },
  methods: {
    // 加载地图
    initMap () {
      //  创建地图对象
      this.map = new Map({
        target: 'ol-map', // 地图容器 对应id
        layers: [DvecLayer, LvecLayer, cvaLayer, imgLayer, ciaLayer, terLayer, ctaLayer, drawLayer, measureLayer], // 图层
        view: new View({ // 视图
          projection: 'EPSG:4326', // 坐标系
          // 初始化地图中心 可以去地图坐标拾取网站获取想要的坐标
          center: [114.339408, 30.61271],
          // 缩放
          zoom: 8,
          // 最大缩放
          maxZoom: 20,
          // 最小缩放
          minZoom: 1
        }),
        // // 地图自带控件，这里我们不需要，后续自己做类似功能
        controls: new Defaults({
          zoom: false,
          rotate: false
        })
      })
	  this.map.addInteraction(modify);
	  this.map.addInteraction(measureModify);

      // 将地图对象抛出去
      this.$emit('getMap', this.map);
	  
      DvecLayer.setVisible(true);
      cvaLayer.setVisible(false);
      LvecLayer.setVisible(false);
      imgLayer.setVisible(false);
      ciaLayer.setVisible(true);
      terLayer.setVisible(false);
      ctaLayer.setVisible(false);
    },
	// 切换图层
    changeLayer(mode){
        if (mode == 'dark'){
            DvecLayer.setVisible(true);
            cvaLayer.setVisible(false);
            LvecLayer.setVisible(false);
            imgLayer.setVisible(false);
            ciaLayer.setVisible(true);
            terLayer.setVisible(false);
            ctaLayer.setVisible(false);
        }else if (mode == 'light'){
            DvecLayer.setVisible(false);
            cvaLayer.setVisible(true);
            LvecLayer.setVisible(true);
            imgLayer.setVisible(false);
            ciaLayer.setVisible(false);
            terLayer.setVisible(false);
            ctaLayer.setVisible(false);
        }else if (mode == 'img'){
            DvecLayer.setVisible(false);
            cvaLayer.setVisible(false);
            LvecLayer.setVisible(false);
            imgLayer.setVisible(true);
            ciaLayer.setVisible(true);
            terLayer.setVisible(false);
            ctaLayer.setVisible(false);
        }else if (mode == 'ter'){
            DvecLayer.setVisible(false);
            cvaLayer.setVisible(false);
            LvecLayer.setVisible(false);
            imgLayer.setVisible(false);
            ciaLayer.setVisible(false);
            terLayer.setVisible(true);
            ctaLayer.setVisible(true);
        }
    },
	// 绘画
	addInteractions(mode) {
		if (mode == 'End'){
			this.map.removeInteraction(draw);
			this.map.removeInteraction(snap);
		}else{
			this.map.removeInteraction(draw);
			this.map.removeInteraction(snap);
			draw = new Draw({
				source: drawSource,
				type: mode,
			});
			this.map.addInteraction(draw);
			snap = new Snap({source: drawSource});
			this.map.addInteraction(snap);
		}
	},
	// 测量
	addInteraction(value){
		const that = this;
		const drawType = value;
		const activeTip =
			'Click to continue drawing the ' +
			(drawType === 'Polygon' ? 'polygon' : 'line');
		const idleTip = 'Click to start measuring';
		let tip = idleTip;
		measureDraw = new Draw({
			source: measureSource,
			type: drawType,
			style: function (feature) {
			return styleFunction(feature, showSegments.checked, drawType, tip);
			},
		});
		measureDraw.on('drawstart', function () {
			if (clearPrevious.checked) {
				measureSource.clear();
			}
			measureModify.setActive(false);
			tip = activeTip;
		});
		measureDraw.on('drawend', function () {
			modifyStyle.setGeometry(tipPoint);
			measureModify.setActive(true);
			that.map.once('pointermove', function () {
			modifyStyle.setGeometry();
			});
			tip = idleTip;
		});
		measureModify.setActive(true);
		this.map.addInteraction(measureDraw);
	},
	measureChange(type){
		showSegments = document.getElementById('segments');
		clearPrevious = document.getElementById('clear');
		const that = this;
		var getCurrentCoordinate = function (e) {
			var lonlat = e.coordinate;
			console.log(lonlat);
	　　　　 alert(lonlat[0]+", "+lonlat[1]);
			that.map.un('click', getCurrentCoordinate)
		}
		if (type == 'Coordinate')
		{
			this.map.on('click', getCurrentCoordinate)
		}else if (type == 'LineString'){
			console.log(showSegments)
			this.map.removeInteraction(measureDraw);
			this.addInteraction('LineString')
		}else if (type == 'Polygon'){
			this.map.removeInteraction(measureDraw);
			this.addInteraction('Polygon')
		}else if (type == 'End'){
			this.map.removeInteraction(measureDraw);

		}
		this.addInteraction();

		showSegments.onchange = function () {
			measureVector.changed();
			measureDraw.getOverlay().changed();
		};
	}
  }
}
</script>


<style src="../../assets/icons/Draw/iconfont.css">
</style>
<style src="../../assets/icons/Measure/iconfont.css">
</style>

<style lang="scss">
#ol-map{
	width: 100%;
	height: 100%;
	position: absolute;
}

.DarkvecLayerClass{
    filter: url('#x-rays') brightness(110%) contrast(170%) grayscale(16%) saturate(120%) sepia(30%) ; 
}

.el-menu--collapse {
	position: absolute;
	z-index: 10;

}
.dropdown {
	position: absolute;
	width: 150px;
	left: 20px;
	top: 10px;
	z-index: 99;
    
	.dropdown-menu {
	min-width: 95px;
	}
}

.ol-draw-select{
	position: absolute;
	width: 200px;
	left: 20px;
	top: 300px;
	z-index: 99;
    
	.dropdown-menu {
	min-width: 95px;
	}
}

.ol-measure-select{
	position: absolute;
	width: 200px;
	left: 20px;
	top: 370px;
	z-index: 99;
}

.layerOption{
    background-color: rgba(25, 51, 88, 0.9) !important;
    border: 1px solid #00b3ff !important;
    box-shadow: 0 2px 12px 0 rgba(0, 152, 217, 0.5) !important;
}

.buttonOption{
	background: none;
	border: 1px solid #00b3ff !important;
    box-shadow: 0 2px 12px 0 rgba(0, 152, 217, 0.5) !important;
	.popper__arrow::after{
		background: none;
		border: 1px solid #00b3ff !important;
		box-shadow: 0 2px 12px 0 rgba(0, 152, 217, 0.5) !important;
	}
}

.text{
	font-size: 16px;
	color: #9ebfff
}
</style>

<style lang="scss" scoped>
::v-deep .el-input__inner{
    background-color:  rgba(25, 51, 88, 0.9)!important;
    border: 1px solid #00b3ff !important;
    box-shadow: 0 2px 12px 0 rgba(0, 152, 217, 0.5) !important;
    color: #fff,
}

::v-deep .el-scrollbar,
::v-deep .el-select-dropdown {
  background-color: transparent !important;
  color: #fff !important;
}

::v-deep .el-scrollbar__wrap,
::v-deep .el-select-dropdown__list {
  background-color: #0b1a37;
  color: #fff !important;
}

::v-deep .el-select-dropdown__item{
    color: #9ebfff,
}
::v-deep .el-select-dropdown__item.selected{
    color: #00b3ff,
}
::v-deep .el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
    background-color: #426994;
    color:#00b3ff,
}

::v-deep .el-popper .el-popover{
	background-color:  rgba(25, 51, 88, 0.9)!important;
    border: 1px solid #00b3ff !important;
    box-shadow: 0 2px 12px 0 rgba(0, 152, 217, 0.5) !important;
}

::v-deep .el-popper .popper__arrow{
	background-color: rgba(25, 51, 88, 0.9) !important;
	border: 1px solid #00b3ff !important;
	box-shadow: 0 2px 12px 0 rgba(0, 152, 217, 0.5) !important;
}


::v-deep .el-button.is-circle{
	background: #fff0;
	background-color:  rgba(25, 51, 88, 0.9)!important;
    border: 1px solid #00b3ff !important;
    box-shadow: 0 2px 12px 0 rgba(0, 152, 217, 0.5) !important;
}

::v-deep .el-button--danger {
    color: #F56C6C;
    font-size: 24px;
}
</style>
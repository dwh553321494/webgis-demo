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
        <div id="mb-map"></div>

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
			<el-button circle @click.native="addMarker(mbmap)"><i class="water-coordinate"></i></el-button>
			<el-button circle @click.native="measureDistance(mbmap)"><i class="water-length"></i></el-button>
			<el-button circle @click.native="measureAcreage(mbmap)"><i class="water-area"></i></el-button>
			<el-button type="danger" circle icon="el-icon-circle-close"  @click.native="measureChange('End')"></el-button>
			</el-row>
			<el-button slot="reference" circle><i class="water-measure"></i></el-button>
		</el-popover>
    </div>
</template>

<script>
import { measureLength, measureArea } from './measureFunction'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css' 
import MapboxLanguage  from '@mapbox/mapbox-gl-language'

mapboxgl.accessToken = "pk.eyJ1Ijoienp6aWlpIiwiYSI6ImNsYmV1cWtqaTAwMWMzbnM3cGYzdG9xanEifQ.Y8VtfjgM1lBszfFHVoDsFw"

var vecSource = {
    "type": "raster",
    'tiles': [
        "http://t7.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=f5347cab4b28410a6e8ba5143e3d5a35"
    ],
    'tileSize': 256
};
var cvaSource = {
    "type": "raster",
    'tiles': [
        "http://t7.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=f5347cab4b28410a6e8ba5143e3d5a35"
    ],
    'tileSize': 256
};
var imgSource = {
    "type": "raster",
    'tiles': [
        "http://t7.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=f5347cab4b28410a6e8ba5143e3d5a35"
    ],
    'tileSize': 256
};
var ciaSource = {
    "type": "raster",
    'tiles': [
        "http://t7.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=f5347cab4b28410a6e8ba5143e3d5a35"
    ],
    'tileSize': 256
};
var terSource = {
    "type": "raster",
    'tiles': [
        "http://t7.tianditu.gov.cn/ter_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=f5347cab4b28410a6e8ba5143e3d5a35"
    ],
    'tileSize': 256
};
var ctaSource = {
    "type": "raster",
    'tiles': [
        "http://t7.tianditu.gov.cn/cta_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=f5347cab4b28410a6e8ba5143e3d5a35"
    ],
    'tileSize': 256
}

// 矢量图层
var vecLayer = {
    "id": "vecsrc",
    "type": "raster",
    "source": "vecsrc",
    "minzoom": 0,
    "maxzoom": 20
};
var cvaLayer = {
    "id": "cvasrc",
    "type": "raster",
    "source": "cvasrc",
    "minzoom": 0,
    "maxzoom": 20
};
// 影像图层
var imgLayer = {
    "id": "imgsrc",
    "type": "raster",
    "source": "imgsrc",
    "minzoom": 0,
    "maxzoom": 20
};
var ciaLayer = {
    "id": "ciasrc",
    "type": "raster",
    "source": "ciasrc",
    "minzoom": 0,
    "maxzoom": 20
};
// 地形图层
var terLayer = {
    "id": "tersrc",
    "type": "raster",
    "source": "tersrc",
    "minzoom": 0,
    "maxzoom": 20
};
var ctaLayer = {
    "id": "ctasrc",
    "type": "raster",
    "source": "ctasrc",
    "minzoom": 0,
    "maxzoom": 20
};

var maskLayer= {
    "id": "mask",
    "type": "background",
    "paint": {
        "background-color": "rgba(48, 77, 140, 0.5)",
    },
    "metadata": {
        "mapbox:group": "92ca48f13df25"
    }
};


export default {
    name: 'mbMap',
    data(){
        return{
            mbmap: null,
            Layers:[
            {
                label: '影像底图',
                value: 'img',
            },
            {
                label: '矢量地图(浅色)',
                value: 'light',
            },
            {
                label: '矢量地图(暗色)',
                value: 'dark',
            },
            {
                label: '地形渲染图',
                value: 'ter',
            },
        ],
        value: 'img'
        }
    },
    mounted(){
        this.init()
    },
    methods: {
        init(){
            // 实例化Map对象加载地图
			this.mbmap = new mapboxgl.Map({
				// 地图容器div的id
				container: 'mb-map', // container id
				style: {
					//设置版本号，一定要设置
					"version": 8,
					//添加来源
					"sources": {
						"vecsrc": vecSource,
						"cvasrc": cvaSource,
						"imgsrc": imgSource,
						"ciasrc": ciaSource,
						"tersrc": terSource,
                        "ctasrc": ctaSource
					},
					//设置加载并显示来源的图层信息
					"layers": [ vecLayer, cvaLayer, imgLayer, ciaLayer, terLayer, ctaLayer, maskLayer],
				},
				center: [114.339408, 30.61271],
				zoom:12,
			});


            //  设置语言
			// let language = new MapboxLanguage({ defaultLanguage: "zh" });
			// this.map.addControl(language);

			// 添加导航控制条
			let nav = new mapboxgl.NavigationControl();
			this.mbmap.addControl(nav, 'bottom-right');

			// 设置
			const bounds = [[-180, -90], [180, 90]]
			this.mbmap.setMaxBounds(bounds)

            // 地图对象已抛出，用于父组件调用
            this.$emit('getmbMap', this.mbmap);

            const that = this;
            this.mbmap.on('load', ()=>{           
                that.mbmap.setLayoutProperty('vecsrc', 'visibility', 'none');
                that.mbmap.setLayoutProperty('cvasrc', 'visibility', 'none');
                that.mbmap.setLayoutProperty('imgsrc', 'visibility', 'visible');
                that.mbmap.setLayoutProperty('ciasrc', 'visibility', 'visible');
                that.mbmap.setLayoutProperty('tersrc', 'visibility', 'none');
                that.mbmap.setLayoutProperty('ctasrc', 'visibility', 'none');
                that.mbmap.setLayoutProperty('mask', 'visibility', 'none');
            })
        },
		// 图层切换
        changeLayer(mode){
            if (mode == 'dark'){
            this.mbmap.setLayoutProperty('vecsrc', 'visibility', 'visible');
            this.mbmap.setLayoutProperty('cvasrc', 'visibility', 'visible');
            this.mbmap.setLayoutProperty('imgsrc', 'visibility', 'none');
            this.mbmap.setLayoutProperty('ciasrc', 'visibility', 'none');
            this.mbmap.setLayoutProperty('tersrc', 'visibility', 'none');
            this.mbmap.setLayoutProperty('ctasrc', 'visibility', 'none');
            this.mbmap.setLayoutProperty('mask', 'visibility', 'visible');
			}else if (mode == 'light'){
				this.mbmap.setLayoutProperty('vecsrc', 'visibility', 'visible');
				this.mbmap.setLayoutProperty('cvasrc', 'visibility', 'visible');
				this.mbmap.setLayoutProperty('imgsrc', 'visibility', 'none');
				this.mbmap.setLayoutProperty('ciasrc', 'visibility', 'none');
				this.mbmap.setLayoutProperty('tersrc', 'visibility', 'none');
				this.mbmap.setLayoutProperty('ctasrc', 'visibility', 'none');
				this.mbmap.setLayoutProperty('mask', 'visibility', 'none');
			}else if (mode == 'img'){
				this.mbmap.setLayoutProperty('vecsrc', 'visibility', 'none');
				this.mbmap.setLayoutProperty('cvasrc', 'visibility', 'none');
				this.mbmap.setLayoutProperty('imgsrc', 'visibility', 'visible');
				this.mbmap.setLayoutProperty('ciasrc', 'visibility', 'visible');
				this.mbmap.setLayoutProperty('tersrc', 'visibility', 'none');
				this.mbmap.setLayoutProperty('ctasrc', 'visibility', 'none');
				this.mbmap.setLayoutProperty('mask', 'visibility', 'none');
			}else if (mode == 'ter'){
				this.mbmap.setLayoutProperty('vecsrc', 'visibility', 'none');
				this.mbmap.setLayoutProperty('cvasrc', 'visibility', 'none');
				this.mbmap.setLayoutProperty('imgsrc', 'visibility', 'none');
				this.mbmap.setLayoutProperty('ciasrc', 'visibility', 'none');
				this.mbmap.setLayoutProperty('tersrc', 'visibility', 'visible');
				this.mbmap.setLayoutProperty('ctasrc', 'visibility', 'visible');
				this.mbmap.setLayoutProperty('mask', 'visibility', 'none');
			}
        },
		// 测量距离
		measureDistance(map) {
			measureLength(map)
		},
		// 测量面积
		measureAcreage(map) {
			measureArea(map)
		},
		// 添加marker
		addMarker(map) {
			const popup = new mapboxgl.Popup()
			.setHTML('<h1>Hello World!</h1>')
			.addTo(map);
			console.log(popup)
		},
    }
}
</script>

<style lang='scss'>
#mb-map {
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 5;
	// filter: url('#x-rays') brightness(110%) contrast(170%) grayscale(16%) saturate(120%) sepia(30%) ; 
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
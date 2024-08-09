// @ts-check

'use strict'

document.onreadystatechange = function() {
	if (document.readyState === 'interactive') {
		const target = document.getElementById('target')
		const initPos = document.getElementById('init-position')
		const rect = initPos.getBoundingClientRect()
		target.style.left = rect.left + 'px'
		target.style.top = rect.top + 'px'

		const onHoverThrottled = throttle(onHover.bind(target), 650)
		target.addEventListener('mouseover', onHoverThrottled)
	}
}

const TAUNTS = [
	"You're too slow!",
	'Catch me if you can',
	'Gotta go fast!',
	'NEEEEOOOOOWWWNN',
	'KACHOW!',
	'I AM SPEED',
	'Shake and Bake',
	'Go ride your bike',
	'Leave a complaint!',
]

function onHover() {
	this.children[0].innerHTML = selectRandomTaunt()
	const [hue, sat, lum] = generateBackgroundColor()
	this.style.backgroundColor = `hsl(${hue}, ${sat}%, ${lum}%)`
	const rect = this.getBoundingClientRect()
	const [x, y] = generateRandomCoordinateInWindow(rect.width, rect.height)
	this.style.left = x + 'vw'
	this.style.top = y + 'vh'
}

function generateRandomCoordinateInWindow(width, height) {
	const x = Math.floor(
		(100 * Math.random() * (window.innerWidth - width)) / window.innerWidth,
	)
	const y = Math.floor(
		(100 * Math.random() * (window.innerHeight - height)) / window.innerHeight,
	)
	return [x, y]
}

function selectRandomTaunt() {
	return TAUNTS[Math.floor(Math.random() * TAUNTS.length)]
}

function generateBackgroundColor() {
	const hue = Math.floor(Math.random() * 256)
	const sat = Math.floor(Math.random() * 101)
	const lum = Math.floor(Math.random() * 20 + 41)
	return [hue, sat, lum]
}

function throttle(func, delay) {
	let timestamp = Date.now()

	const throttled = (...args) => {
		if (Date.now() - timestamp < delay) return
		timestamp = Date.now()
		return func(...args)
	}

	return throttled
}


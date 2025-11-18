//import all required from different locatoins here, these then can be simply used everywhere with just '$lib/name'
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';
import Body from '$lib/components/Body.svelte';
import Instructions from '$lib/components/Instructions.svelte';
import SelectionMenu from './components/SelectionMenu.svelte';
import { classData } from './assets/data';

export { Header, Footer, Body, Instructions, SelectionMenu, classData };

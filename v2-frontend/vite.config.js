import { sveltekit } from '@sveltejs/kit/vite';
import houdini from 'houdini/vite';
const config = {
    plugins: [houdini(), sveltekit()],
};
export default config;
//# sourceMappingURL=vite.config.js.map
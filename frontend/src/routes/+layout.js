import PatientIcon from '~icons/bi/person';
import UserIcon from '~icons/bi/person';
import SearchIcon from '~icons/carbon/search-locate';
import RecurringIcon from '~icons/ic/round-event-repeat';
import DashboardIcon from '~icons/ic/sharp-dashboard-customize';
import '../assets/styles/app.scss';
import { activePath } from '../lib/state/SidebarStore';
// import makeServer from '../../mirage/mirage';
//
// if (process.env.NODE_ENV === 'development' && typeof makeServer === 'function') {
// 	makeServer(); // For people following the tutorial
// }
export const trailingSlash = 'always';
const props = {
    activeUrl: activePath,
    routes: [
        { name: 'Dashboard', route: '/', icon: DashboardIcon },
        { name: 'Search', route: '/search', icon: SearchIcon },
        { name: 'Follow Ups', route: '/followups', icon: RecurringIcon },
        { name: 'Investigations', route: '/investigations', icon: SearchIcon },
        { name: 'Examinations', route: '/examinations', icon: SearchIcon },
        { name: 'Patients', route: '/patients-recipient', icon: PatientIcon },
        { name: 'New Patient', route: '/patients-recipient/new', icon: PatientIcon },
        // { name: 'Doctors', route: '/doctors', icon: DoctorIcon },
        // { name: 'Users', route: '/users', icon: UserIcon },
        { name: 'Workflow', route: '/workflow/', icon: UserIcon }
        // { name: '', route: '/i', icon: DoctorIcon }
    ]
};
const bottomProps = {
    activeUrl: activePath,
    routes: [
    // { name: 'System Settings', route: '/settings', icon: SettingsIcon },
    // { name: 'Preferences', route: '/preferences', icon: PreferencesIcon }
    ]
};
// throw new Error("@migration task: Check if you need to migrate the load function input (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
// export async function load(loadInput: LoadEvent): Promise<LoadOutput> {
// 	console.log(loadInput.url);
// 	activeUrl.set(loadInput.url.pathname);
// props.activeUrl = loadInput.url.pathname;
// bottomProps.activeUrl = loadInput.url.pathname;
// throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
// return await authGuard(loadInput);
// }
// client.init()
//# sourceMappingURL=+layout.js.map
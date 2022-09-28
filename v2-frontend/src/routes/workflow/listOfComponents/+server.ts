import ExaminationComponent from '../../patients-[type]/view/[id]/examinations/new.svelte';
import FollowUpComponent from '../../patients-[type]/view/[id]/followups/create.svelte';
import MedicalHistoryComponent from '../../patients-[type]/view/[id]/history/new/medical.svelte';
import SurgicalHistoryComponent from '../../patients-[type]/view/[id]/history/new/surgical.svelte';
import InvestigationComponent from '../../patients-[type]/view/[id]/investigations/new.svelte';
import WorkupComponent from '../../patients-[type]/view/[id]/workups/new.svelte';

export const listOfComponents = [];

listOfComponents.push({ title: 'followup', value: FollowUpComponent });
listOfComponents.push({ title: 'workup', value: WorkupComponent });
listOfComponents.push({ title: 'examination', value: ExaminationComponent });
listOfComponents.push({ title: 'investigation', value: InvestigationComponent });
listOfComponents.push({ title: 'medical-history', value: MedicalHistoryComponent });
listOfComponents.push({ title: 'surgical-history', value: SurgicalHistoryComponent });

export const mapOfComponents = {};

mapOfComponents['followup'] = FollowUpComponent;
mapOfComponents['workup'] = WorkupComponent;
mapOfComponents['examination'] = ExaminationComponent;
mapOfComponents['investigation'] = InvestigationComponent;
mapOfComponents['medical-history'] = MedicalHistoryComponent;
mapOfComponents['surgical-history'] = SurgicalHistoryComponent;

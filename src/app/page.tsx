import ToggleEditor from '../../components/ToggleEditor';
import EditMode from '../../components/ui/EditMode';
import { Dialogs } from '../../components/ui/ShareButton';

export default function Home() {
	return (
		<div>
			<div className="flex flex-col  justify-around">
				<div className="flex justify-end gap-4 mb-4">
					<ToggleEditor />

					<Dialogs />
				</div>

				<EditMode />
			</div>
		</div>
	);
}

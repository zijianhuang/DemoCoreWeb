import { Link, Outlet } from 'react-router-dom';
import './HeroDetail.css';
import { ThemeDef } from './themeDef';
import { AppConfigConstants } from './testSettings';
import { ThemeLoader } from './themeLoader';

export default function Home() {
	const themes = AppConfigConstants.themesDic ? Object.keys(AppConfigConstants.themesDic).map(k => {
		const c = AppConfigConstants.themesDic![k];
		const obj: ThemeDef = {
			display: c.display,
			filePath: k,
			dark: c.dark
		};
		return obj;
	}) : undefined;

	const currentTheme = ThemeLoader.selectedTheme;
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		ThemeLoader.loadTheme(event.target.value);
	};

	return (
		<>
			<h1>React Heroes!</h1>
			<div>
				<label htmlFor="theme-select">Themes </label>
				<select
					id="theme-select"
					value={currentTheme!}
					onChange={handleChange}
				>
					{themes?.map((item, index) => (
						<option key={index} value={item.filePath}>
							{item.display}
						</option>
					))}
				</select>
			</div>
			
			<nav>
				<Link to="dashboard">Dashboard</Link>
				<Link to="heroes">Heroes</Link>
			</nav>

			<Outlet />
		</>
	);

}


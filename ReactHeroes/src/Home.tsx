import { Link, Outlet } from 'react-router-dom';
import './HeroDetail.css';
import { AppConfigConstants } from './testSettings';
import { useState } from 'react';
import { ThemeConfigConstants, ThemeDef, ThemeLoader } from 'theme-loader-api';

export default function Home() {
	const themes = ThemeConfigConstants.themesDic ? Object.keys(ThemeConfigConstants.themesDic).map(k => {
		const c = ThemeConfigConstants.themesDic![k];
		const obj: ThemeDef = {
			display: c.display,
			filePath: k,
			dark: c.dark
		};
		return obj;
	}) : undefined;

	const [currentTheme, setCurrentTheme] = useState(() => ThemeLoader.selectedTheme ?? undefined);
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const v = event.target.value;
		setCurrentTheme(v);
		ThemeLoader.loadTheme(v);
	};

	return (
		<>
			<h1>React Heroes!</h1>
			<div>
				<label htmlFor="theme-select">Themes </label>
				<select
					id="theme-select"
					value={currentTheme ?? ""}
					onChange={handleChange}
				>
					{themes?.map((item) => (
						<option key={item.filePath} value={item.filePath}>
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


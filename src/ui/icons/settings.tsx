import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const Settings = ({ color = '#000', ...props }: SvgProps) => {
	return (
		<Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
			<Path
				d="M19.405 12.975c.05-.292.05-.634.05-.975 0-.341-.05-.634-.05-.975l2.093-1.609c.2-.146.25-.39.1-.633l-1.994-3.364c-.1-.195-.399-.293-.599-.195l-2.493.975a7.258 7.258 0 0 0-1.695-.975l-.349-2.584a.534.534 0 0 0-.498-.39H9.98a.534.534 0 0 0-.498.39l-.399 2.584c-.598.243-1.147.585-1.695.975l-2.494-.975c-.249-.098-.498 0-.598.195L2.302 8.783c-.1.194-.05.487.1.633l2.143 1.609c0 .341-.05.634-.05.975 0 .341.05.634.05.975l-2.093 1.609c-.2.146-.25.39-.1.633l1.994 3.364c.1.195.4.293.599.195l2.493-.975c.498.39 1.096.732 1.695.975l.399 2.584c.05.244.249.39.498.39h3.99c.249 0 .448-.195.498-.39l.4-2.584c.597-.243 1.146-.585 1.694-.975l2.493.975c.25.098.499 0 .599-.195l1.994-3.364a.588.588 0 0 0-.1-.633l-2.193-1.609Zm-7.43 2.438c-1.945 0-3.49-1.512-3.49-3.413 0-1.902 1.545-3.413 3.49-3.413 1.945 0 3.49 1.511 3.49 3.413 0 1.901-1.545 3.412-3.49 3.412Z"
				fill={color}
			/>
		</Svg>
	);
};

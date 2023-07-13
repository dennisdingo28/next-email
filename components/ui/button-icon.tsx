import { cn } from '@/lib/utils';
import { FC, MouseEventHandler, ReactElement } from 'react'

interface ButtonIconProps {
    icon:ReactElement;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    className?: string;
}

const ButtonIcon: FC<ButtonIconProps> = ({icon,onClick,className}) => {
  return <button onClick={onClick} className={cn('bg-transparent border-2 border-slate-600',className)}>{icon}</button>
}

export default ButtonIcon
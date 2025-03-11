
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type UserAvatarProps = {
  src?: string;
  name: string;
  role?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showInfo?: boolean;
};

const UserAvatar = ({
  src,
  name,
  role,
  size = "md",
  className,
  showInfo = false,
}: UserAvatarProps) => {
  // Get user's initials for the fallback
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);

  // Size mappings
  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
    xl: "h-16 w-16 text-lg",
  };

  return (
    <div className={cn("flex items-center", className)}>
      <Avatar className={cn("ring-2 ring-background", sizeClasses[size])}>
        <AvatarImage src={src} alt={name} className="object-cover" />
        <AvatarFallback className="font-medium">
          {initials}
        </AvatarFallback>
      </Avatar>
      
      {showInfo && (
        <div className="ml-3">
          <p className="font-medium text-sm leading-tight">{name}</p>
          {role && (
            <p className="text-xs text-muted-foreground leading-tight">
              {role}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default UserAvatar;

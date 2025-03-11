
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import UserAvatar from "@/components/UserAvatar";
import { Linkedin, Mail, ExternalLink } from "lucide-react";

type TeamMemberProps = {
  id: string;
  name: string;
  role: string;
  avatarUrl?: string;
  bio?: string;
  department?: string;
  year?: string;
  email?: string;
  linkedin?: string;
  portfolio?: string;
  isLeader?: boolean;
  className?: string;
};

const TeamMember = ({
  id,
  name,
  role,
  avatarUrl,
  bio,
  department,
  year,
  email,
  linkedin,
  portfolio,
  isLeader,
  className,
}: TeamMemberProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/profile/${id}`}>
      <Card
        className={`overflow-hidden transition-all duration-300 h-full ${
          isHovered ? "shadow-md" : ""
        } ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-5">
          <div className="flex items-center">
            <UserAvatar src={avatarUrl} name={name} size="lg" />
            <div className="ml-4 space-y-1">
              <div className="flex items-center">
                <h4 className="font-semibold">{name}</h4>
                {isLeader && (
                  <Badge variant="outline" className="ml-2 text-xs">
                    Team Lead
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-tight">{role}</p>
              {department && (
                <p className="text-xs text-muted-foreground leading-tight">
                  {department} {year ? `· ${year}` : ""}
                </p>
              )}
            </div>
          </div>

          {bio && (
            <p className="mt-4 text-sm text-muted-foreground line-clamp-3">
              {bio}
            </p>
          )}

          {(email || linkedin || portfolio) && (
            <div className="mt-4 pt-4 border-t border-border/40 flex gap-3">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Mail size={18} />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Linkedin size={18} />
                </a>
              )}
              {portfolio && (
                <a
                  href={portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
};

export default TeamMember;

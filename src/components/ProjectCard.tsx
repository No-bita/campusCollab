
import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import UserAvatar from "@/components/UserAvatar";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  teamMembers: {
    id: string;
    name: string;
    role: string;
    avatarUrl?: string;
  }[];
  className?: string;
};

const ProjectCard = ({
  id,
  title,
  description,
  imageUrl,
  category,
  teamMembers,
  className,
}: ProjectCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link to={`/project/${id}`}>
      <Card 
        className={`overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full ${className}`}
      >
        <div className="aspect-video relative overflow-hidden">
          <div 
            className={`absolute inset-0 bg-muted animate-pulse ${
              isLoaded ? 'opacity-0' : 'opacity-100'
            } transition-opacity duration-300`}
          />
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
          />
          <Badge className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm">
            {category}
          </Badge>
        </div>
        
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mt-1 line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {description}
          </p>
          
          <div className="mt-4 pt-4 border-t border-border/40">
            <div className="flex -space-x-3">
              {teamMembers.slice(0, 3).map((member) => (
                <UserAvatar
                  key={member.id}
                  src={member.avatarUrl}
                  name={member.name}
                  size="sm"
                  className="ring-2 ring-background"
                />
              ))}
              {teamMembers.length > 3 && (
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-xs font-medium ring-2 ring-background">
                  +{teamMembers.length - 3}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;

import Image from "next/image";
import { Building2Icon, LinkIcon, MailIcon, MapPinIcon } from "lucide-react";
import { GitHubUser } from "lib/definitions";
import { formatDate } from "lib/utils";

interface CardProps {
  user: GitHubUser;
}

export default function Card({ user }: CardProps) {
  const quantityInformations = [
    { title: "Repos", info: user.public_repos },
    { title: "Followers", info: user.followers },
    { title: "Following", info: user.following },
  ];

  const OtherInformations = [
    { icon: Building2Icon, info: user.company },
    { icon: MapPinIcon, info: user.location },
    { icon: MailIcon, info: user.email },
    { icon: LinkIcon, info: user.html_url },
  ];

  return (
    <div className="flex flex-col gap-8 rounded-xl bg-white px-4 py-6 dark:bg-slate-800">
      <div className="flex items-center gap-4">
        <Image
          width={96}
          height={96}
          src={user.avatar_url}
          alt=""
          className="rounded-full"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-sm text-blue-700 dark:text-blue-600">
            @{user.login}
          </p>
          <p className="text-sm">{formatDate(user.created_at)}</p>
        </div>
      </div>
      <p className="text-sm">{user.bio}</p>
      <div className="flex justify-center gap-6 rounded-xl bg-zinc-50 p-4 text-sm dark:bg-slate-900">
        {quantityInformations.map((info, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <p className="font-medium">{info.title}</p>
            <p>{info.info}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 text-sm">
        {OtherInformations.map((info, index) => (
          <div key={index} className="flex flex-wrap items-center gap-2">
            <info.icon />
            {info.info ? (
              <p>{info.info}</p>
            ) : (
              <p className="text-zinc-400">Not available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

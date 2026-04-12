import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[10rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-[2.5rem] group/bento hover:shadow-xl transition duration-500 shadow-input dark:shadow-none p-8 bg-white/[0.03] border border-white/10 justify-between flex flex-col space-y-4 hover:bg-white/[0.06] hover:border-white/20",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-1 transition duration-500">
        {icon}
        <div className="font-sans font-bold text-white text-xl mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-white/60 text-sm">
          {description}
        </div>
      </div>
      {header}
    </div>
  );
};

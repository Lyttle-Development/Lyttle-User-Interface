import * as React from 'react';

import {cn} from '../../lib/utils';
import {Button} from '../button';
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    MoreHorizontalIcon
} from 'lucide-react';
import styles from './pagination.module.scss';

function Pagination({className, ...props}: React.ComponentProps<'nav'>) {
    return (
        <nav
            role="navigation"
            aria-label="pagination"
            data-slot="pagination"
            className={cn(styles.pagination, className)}
            {...props}
        />
    );
}

function PaginationContent({
                               className,
                               ...props
                           }: React.ComponentProps<'ul'>) {
    return (
        <ul
            data-slot="pagination-content"
            className={cn(styles.content, className)}
            {...props}
        />
    );
}

function PaginationItem({...props}: React.ComponentProps<'li'>) {
    return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
    isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, 'size'> &
    React.ComponentProps<'a'>

function PaginationLink({
                            className,
                            isActive,
                            size = 'icon',
                            ...props
                        }: PaginationLinkProps) {
    return (
        <Button
            asChild
            variant={isActive ? 'outline' : 'ghost'}
            size={size}
            className={cn(className)}
        >
            <a
                aria-current={isActive ? 'page' : undefined}
                data-slot="pagination-link"
                data-active={isActive}
                {...props}
            />
        </Button>
    );
}

function PaginationPrevious({
                                className,
                                text = 'Previous',
                                ...props
                            }: React.ComponentProps<typeof PaginationLink> & {
    text?: string
}) {
    return (
        <PaginationLink
            aria-label="Go to previous page"
            size="default"
            className={cn(styles.previousLink, className)}
            {...props}
        >
            <ChevronLeftIcon data-icon="inline-start"/>
            <span className={styles.responsiveLabel}>{text}</span>
        </PaginationLink>
    );
}

function PaginationNext({
                            className,
                            text = 'Next',
                            ...props
                        }: React.ComponentProps<typeof PaginationLink> & {
    text?: string
}) {
    return (
        <PaginationLink
            aria-label="Go to next page"
            size="default"
            className={cn(styles.nextLink, className)}
            {...props}
        >
            <span className={styles.responsiveLabel}>{text}</span>
            <ChevronRightIcon data-icon="inline-end"/>
        </PaginationLink>
    );
}

function PaginationEllipsis({
                                className,
                                ...props
                            }: React.ComponentProps<'span'>) {
    return (
        <span
            aria-hidden
            data-slot="pagination-ellipsis"
            className={cn(styles.ellipsis, className)}
            {...props}
        >
      <MoreHorizontalIcon
      />
      <span className={styles.srOnly}>More pages</span>
    </span>
    );
}

export {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
};


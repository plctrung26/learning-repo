export const getStatusBadgeColor = (status: string) => {
    switch (status) {
        case 'published':
            return 'green';
        case 'draft':
            return 'yellow';
        default:
            return 'red';
    }
};
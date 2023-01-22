import { Flex,Text, Button, Link  as StyledLink} from 'rebass/styled-components';
import  {Link} from 'react-router-dom'
import { useMutation,useQueryClient } from 'react-query';
import { removeUser } from '../api';
// import Loader from 'react-loader-spinner'


export const User = ({name,username,email,address,id}) => {
    const queryClient = useQueryClient()
    const{mutateAsync,isLoading} = useMutation(removeUser);

    const remove = async() => {
        await mutateAsync(id)
        queryClient.invalidateQueries('users')
    }
    return (<Flex p={3} width="100%" alignItems="center">
        <Link component={StyledLink} to={`/update-user/${id} `} mr="auto">{name} {username}</Link>
        <Text>{name}</Text>
        <Button ml="5" onClick={remove}>
            {/* {isLoading ? <Loader type="ThreeDots" color="#fff" height={10}/> :  */}
            Remove
        </Button>
    </Flex>);
}
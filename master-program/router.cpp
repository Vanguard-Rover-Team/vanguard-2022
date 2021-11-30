
#include <zmq_addon.hpp>
#include <iostream>
#include <unistd.h>

static zmq::context_t ctx;

int main()
{
    zmq::socket_t sock(ctx, zmq::socket_type::router);
    zmq::socket_t pub_sock(ctx, zmq::socket_type::pub);
    sock.bind("tcp://*:5555");
    pub_sock.bind("tcp://*:5556");

    while(1)
    {
        zmq::multipart_t msg;
        zmq::multipart_t recv_msgs;

        auto res = zmq::recv_multipart(sock, std::back_inserter(recv_msgs));

        if(res.has_value())
        {
            std::cout << "\n-----------------------------------\ntrue";
        }

        for (auto&& msg : recv_msgs)
        {
            std::cout << "\n" << msg;
        }

        auto send_res = zmq::send_multipart(pub_sock, recv_msgs, zmq::send_flags::none);

        recv_msgs.clear();
    }
}
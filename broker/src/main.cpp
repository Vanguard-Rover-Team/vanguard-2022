#include <zmq.hpp>

int main() {
    zmq::context_t zmqContext;

    zmq::socket_t ipcSocket(zmqContext, zmq::socket_type::router);
    ipcSocket.bind("ipc://broker.ipc");
    
    zmq::socket_t tcpSocket(zmqContext, zmq::socket_type::router);
    tcpSocket.bind("tcp://localhost:5557");

    zmq::pollitem_t pollItems [] = {
        { ipcSocket, 0, ZMQ_POLLIN, 0 },
        { tcpSocket, 0, ZMQ_POLLIN, 0 }
    };

    while (true) {
        zmq::poll(pollItems, sizeof(pollItems) / sizeof(zmq::pollitem_t));
        
        if (pollItems[0].revents & ZMQ_POLLIN) {
            zmq::message_t message;
            ipcSocket.recv(message);

            while (true) {
                message.rebuild();
                ipcSocket.recv(message);

                if (message.more()) {
                    ipcSocket.send(message, zmq::send_flags::sndmore);
                } else {
                    ipcSocket.send(message);
                    break;
                }
            };
        }

        if (pollItems [1].revents & ZMQ_POLLIN) {
            zmq::message_t message;
            tcpSocket.recv(message);

            while (true) {
                message.rebuild();
                tcpSocket.recv(message);

                if (message.more()) {
                    tcpSocket.send(message, zmq::send_flags::sndmore);
                } else {
                    tcpSocket.send(message);
                    break;
                }
            };
        }
    }
}
